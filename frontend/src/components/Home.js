import React from 'react';
import HomeNavbar from './HomeNavbar';
import {useState} from 'react';
import axios from 'axios';


export default function Home() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [messageShow, setMessageShow] = useState(null);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const submit = (e) => {
        if(username=='' || password==''){
            setColor("red");
            setMessage("Fill all details!");
            setMessageShow(true);
            setTimeout(function() {
                setMessageShow(false);
            }.bind(this), 2000);
        }
        else{
            axios.post('http://localhost:8080/login', {

                username: username,
                password: password
            })
                .then(result => {
                    var token=result.data.jwtToken;
                    var role=result.data.role;
                    var id=result.data.id;
                    sessionStorage.setItem("token", token);
                    sessionStorage.setItem("id", id);
                    window.location.href="/client_home";
                    setColor("#46b800");
                    setMessage("Logged!");
                    setMessageShow(true);
                    setTimeout(function() {
                        setMessageShow(false);
                    }.bind(this), 2000);
                })
                .catch(error => {
                    setColor("red");
                    setMessage("Credentials mismatch!");
                    setMessageShow(true);
                    setTimeout(function() {
                        setMessageShow(false);
                    }.bind(this), 2000);
                });
        }
    }

    const Results = () => (
        <h4 id="results" className="search-results" style={{color:color}}>
          {message}
        </h4>
      )

    return (
        <div>
            <HomeNavbar/>
            <h1>Login</h1>
            <div class="col-4" style={{margin: "auto", textAlign: 'left'}}>
                <form>
                    { messageShow ? <Results /> : null }
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
                </form>
                    <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
               
            </div>
        </div>
    )
}
