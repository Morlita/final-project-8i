import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './SignIn.css'

function Signin() {

    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const LettersRegexp = /[a-z]/g

    let history = useHistory()

    const [usuario, setUsuario] = useState({
        name: "",
        lastName: "",
        email: "",
        password: ""
    });

    const setUserObj = (event) => {
        setUsuario({ ...usuario, [event.target.name]: event.target.value });
    }

    let parametros = {
        name: usuario.name,
        email: usuario.email
    }

    let sendEmail = () => {
        emailjs.send('gmail', 'template_e0meufb', parametros, "user_CjWnZrzaDNFhrMVuulGpr")
    .then(function(response) {
       alert("Registro exitoso, revisa tu casilla de correo e inicia secion")
    });
    }

    const Guardar = () => {

        if (usuario.name.length < 2 || usuario.name.length > 25 || LettersRegexp.test(usuario.name) === false) {
            alert("Nombre invalido")
        }
        else if (usuario.lastName.length < 3 || usuario.lastName.length > 25 || LettersRegexp.test(usuario.lastName) === false) {
            alert("appellido invalido")
        }
        else if (usuario.email === "" || emailRegexp.test(usuario.email) === false) {
            alert("email invalido")
        }
        else if (usuario.password.length < 6) {
            alert("contraseña invalida")
        }
        else {

            const data = JSON.stringify({
                email: usuario.email,
                password: usuario.password,
                name: usuario.name,
                lastName: usuario.lastName,
                role: "user"
            })

            fetch('https://polar-reaches-30197.herokuapp.com/user/', {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: data
            }).then(response => {
                if (response.status === 200) {
                    sendEmail();
                    history.push("/login")
                  }
                  else{
                      alert("ocurrio un error")
                  }
              })      
        }

    }

    return (

        <div className="container signin-component rounded mt-4 px-4 py-2 d-grid col-md-7 col-10">
            <h3 className="text-center pt-2">Primera vez en RecetApp?</h3>
            <h1 className="text-center py-2 h2">Ingresá tus datos para comenzar</h1>
            <form id="formUsuario">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="Username" onChange={setUserObj} />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" aria-describedby="Username" onChange={setUserObj} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={setUserObj} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={setUserObj} />
                </div>
                <div className="d-grid col-5 mx-auto register-button">
                    <button type="button" className="btn btn-danger m-3 rounded-pill" onClick={Guardar}>Registrarme</button>
                </div>
                <div className="text-center p-2">
                    <p className="text-muted mb-1">O si ya estás registrado:</p>
                    <Link to="/login" className="text-decoration-none or-sign-in btn btn-outline-danger rounded-pill">Iniciar sesión</Link> 
                </div>
            </form>
        </div>


    );
}

export default Signin;
