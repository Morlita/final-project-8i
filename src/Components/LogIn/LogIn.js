import React ,{useState, useEffect} from "react";
import { Link } from 'react-router-dom';

function Login (){

    const [usuario,setUsuario] = useState({
        email:"",
        password:""
    });

    const setUserObj = (event) =>{
        setUsuario({...usuario, [event.target.name]:event.target.value});
    }

    const Guardar = ()=>{
        useEffect(()=>{
            fetch('https://polar-reaches-30197.herokuapp.com/user/login'),{
                Headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method:"POST",
                body:JSON.stringify({
                    email: usuario.email,
                    password: usuario.password
                })
        }
       
    },[])}

    return (
        <div>
            <div>
                <h1 className="text-center">RecetApp</h1>
                <br/>
                <h3 className="text-center">sign in</h3>
                <form id ="formLogIn">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={setUserObj}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={setUserObj}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Remenber me</label>
                    </div>
                    <div>
                    <button type="button" class="btn btn-primary m-3" onClick={Guardar}>Log in</button>
                    <Link to="/">
                        <button type="button" class="btn btn-primary">Done</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Login;
