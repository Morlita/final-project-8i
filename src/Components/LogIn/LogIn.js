import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import './Login.css'

function Login() {

    let history = useHistory()

    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    });

    const setUserObj = (event) => {
        setUsuario({ ...usuario, [event.target.name]: event.target.value });
    }

    const Guardar = () => {

        const data = JSON.stringify({
            email: usuario.email,
            password: usuario.password
        })

        fetch('https://polar-reaches-30197.herokuapp.com/user/login', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: data
        }).then(response => response.json()
        ).then(data => {
            console.log(data);
            if (!data.token) {
                alert("email o contraseña incorrectos");
            }
            else {
                localStorage.setItem("logedUser", JSON.stringify(usuario.email))
                localStorage.setItem("registerLogIn", JSON.stringify(data))
                localStorage.setItem("userToken", JSON.stringify(data.token))
                alert("usuario logeado con exito")
                history.push("/")
            }

        })



    }

    return (

        <div className="container mt-4 login-component rounded px-4 py-2 d-grid col-md-7 col-10">
            <h3 className="text-center pt-2">Bienvenido de nuevo!</h3>
            <h1 className="text-center py-2 h2">Completá tus datos para ingresar</h1>
            <form id="formLogIn">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={setUserObj} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={setUserObj} />
                </div>
                <div className='d-grid col-5 mx-auto register-button'>
                    <button type="button" className="btn btn-danger m-3 sign-in-button rounded-pill" onClick={Guardar}>Ingresar</button>
                </div>
                <div className="text-center p-2">
                    <p className="text-muted mb-1">Si todavía no te registraste, ingresá aquí:</p>
                    <Link to="/signin" className="text-decoration-none or-register btn btn-outline-danger rounded-pill">Registrate</Link>
                </div>
            </form>
        </div>

    );
}


export default Login;
