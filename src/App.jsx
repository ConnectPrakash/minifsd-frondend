import React from "react";
import { Route, BrowserRouter as Router, Routes,Navigate } from "react-router-dom";
import Create from "./components/Create";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";


function App(){
  return <>
  <Router>
<Routes>
  <Route path="/create" element={<Create/>}/>
  <Route path="/:id" element={<Profile/>}/>
  <Route path="/" element={<Dashboard/>}/>
  <Route path="*" element={<Navigate to='/'/>}/>
</Routes>
  </Router>
  </>
}

export default App;