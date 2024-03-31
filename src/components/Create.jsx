import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import config from '../utils/config';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
function Create() {
    let [firstName,setFName] = useState("")
    let [lastName,setLName] = useState("")
    let [email,setEmail] = useState("")
    let navigate = useNavigate()
    let handleCreate = async() => {
        try {
            let res = await axios.post(`${config.API_URL}/user`,{
                firstName,
                lastName,
                email
            })
            if(res.status === 200)
            {
                toast.success(res.data.message)
                Navigate('/')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form type="text" placeholder="First Name"  onChange={e=>setFName(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form type="text" placeholder="Last Name" onChange={e=>setFName(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form type="text" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>

      <Button variant="primary" type="submit" onClick={handleCreate}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Create
