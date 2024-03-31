import React, { useEffect, useState } from 'react'
import config from '../utils/config';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    let [users,setUsers] = useState([])
    const Navigate = useNavigate;
    const getAllUsers = async() =>{
        try {
            console.log(config.API_URL)
            let res = await axios.get(`${config.API_URL}/user`)
             if(res.status === 200)
             {
                toast.success(res.data.message)
                setUsers(res.data.users)
             }
             else{
                toast.error(res.data.message)
             }
        
        } catch (error) {
            toast.error(error.res.data.message)
        }
    }
    const handleDelete = async(id)=>{
    {
        try {
            
            let res = await axios.delete(`${config.API_URL}/user/${id}`)
             if(res.status === 200)
             {
                toast.success(res.data.message)
               await getAllUsers();
             }
             else{
                toast.error(res.data.message)
             }
        
        } catch (error) {
            toast.error(error.res.data.message)
              }
    }}
    useEffect(() =>{
       getAllUsers();
    },[])
  return (
    <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope='col'>Actions</th>
    </tr>
  </thead>
  <tbody>
   {
    users.map((e,i) =>{
        return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td>{e.email}</td>
            <td>
            <button type="button" className="btn btn-primary" onClick={() =>Navigate(`/${e.id}`)}>Edit</button>               
            <button type="button" className="btn btn-danger" onClick={()=>handleDelete(e._id)}>Delete</button>

            </td>
        </tr>
    })
   }
    </tbody>
  </table>
    </div>
  )
}

export default Dashboard
