import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Profile() {
    let [firstName,setFName] = useState("")
    let [lastName,setLName] = useState("")
    let [email,setEmail] = useState("")
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="First Name"  onChange={e=>setFName(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Last Name" onChange={e=>setFName(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Profile
