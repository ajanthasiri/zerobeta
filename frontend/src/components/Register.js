import React from 'react';
import HomeNavbar from './HomeNavbar';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {

  const [username,setUsername]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [address,setAddress]=useState('');
  const [password,setPassword]=useState('');
  const [passwordConfirm,setPasswordConfirm]=useState('');
  const [message, setMessage] = useState(null)
  const handleUsername=(e)=>{
    setUsername(e.target.value);
  }
  const handleFirstName=(e)=>{
    setFirstName(e.target.value);
  }
  const handleAddress=(e)=>{
    setAddress(e.target.value);
  }
  const handleLastName=(e)=>{
    setLastName(e.target.value);
  }
  const handlePasswordConfirm=(e)=>{
    setPasswordConfirm(e.target.value);
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
  }
  const submit=(e)=>{
    axios.post('http://localhost:8080/api/v1/user/saveUser',{
      username:username,
      firstName:firstName,
      lastName:lastName,
      address:address,
      password:password
    })
    .then(result=>{
      setMessage("success");
      console.log(result);
    })
    .catch(error=>{
      setMessage("error");
      console.log(error);
    });
  }

  return (
    <div>
        <HomeNavbar/>
        <h1>Register</h1>
        <div class="col-4" style={{margin:"auto",textAlign:'left'}}>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">First Name</label>
                <input type="text" class="form-control" value={firstName} onChange={handleUsername} id="firstName" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                <input type="text" class="form-control" value={lastName} onChange={handleFirstName} id="lastName" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Userame</label>
                <input type="text" class="form-control" value={username} onChange={handleLastName} id="username" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Address</label>
                <input type="text" class="form-control" value={address} onChange={handleAddress} id="address" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={password} onChange={handlePassword} class="form-control" id="password"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password Confirm</label>
                <input type="password" value={passwordConfirm} onChange={handlePasswordConfirm} class="form-control" id="passwordConfirm"/>
            </div><br/>
            <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
  )
}
