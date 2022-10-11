import React from 'react';
import HomeNavbar from './HomeNavbar';
import {useState} from 'react';
import axios from 'axios';

export default function Home() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null)
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const submit = (e) => {
        axios.post('http://localhost:8080/api/v1/user/saveUser', {
            username: username,
            password: password
        })
            .then(result => {
                setMessage("success");
                console.log(result);
            })
            .catch(error => {
                setMessage("error");
                console.log(error);
            });
    }

    return (
        <div>
            <HomeNavbar/>
            <h1>Login</h1>
            <div class="col-4" style={{margin: "auto", textAlign: 'left'}}>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="text" class="form-control" value={username} onChange={handleUsername} id="username"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" value={password} onChange={handlePassword}
                               id="password"/>
                    </div>
                    <br/>
                    <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
