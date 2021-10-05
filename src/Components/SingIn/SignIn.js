import React ,{useState} from "react";
import {useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Signin (){

    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const LettersRegexp = /[a-z]/g

    let history = useHistory()

    const [usuario,setUsuario] = useState({
        name: "",
        lastName: "",
        email:"",
        password:""
    });

    const setUserObj = (event) =>{
        setUsuario({...usuario, [event.target.name]:event.target.value});
    }

    let parametros = {
        name: usuario.name,
        email: usuario.email
    }

    let sendEmail = ()=>{
        emailjs.send('gmail', 'template_e0meufb', parametros, "user_CjWnZrzaDNFhrMVuulGpr")
    .then(function(response) {
       alert("registro exitoso, revisa tu casilla de correo")
    });
    }

    const Guardar = ()=>{

        if(usuario.name.length < 2 || usuario.name.length > 25 || LettersRegexp.test(usuario.name) === false ){
            alert("Nombre invalido")
        }
        else if(usuario.lastName.length < 3 || usuario.lastName.length > 25 || LettersRegexp.test(usuario.lastName) === false ){
            alert("appellido invalido")
        }
        else if(usuario.email === "" || emailRegexp.test(usuario.email) === false){
            alert("email invalido")
        }
        else if(usuario.password.length < 6){
            alert("contraseña invalida")
        }
        else{
            
            const data = JSON.stringify({
                email: usuario.email,
                password: usuario.password,
                name: usuario.name,
                lastName: usuario.lastName,
                role:"user"
            })

              fetch('https://polar-reaches-30197.herokuapp.com/user/', {
                  headers:{
                      "Accept": "application/json",
                      "Content-Type": "application/json"
                  },
                  method:"POST",
                  body: data
              }).then(response => {
                  if(response.status === 200){
                    sendEmail();
                    history.push("/")
                  }
                  else{
                      alert("ocurrio un error")
                  }
              })      
        }
        
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center">RecetApp</h1>
                <br/>
                <h3 className="text-center">Registrate</h3>
                <form id ="formUsuario">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" aria-describedby="Username" onChange={setUserObj} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" aria-describedby="Username" onChange={setUserObj}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={setUserObj}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={setUserObj}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
                    </div>
                    <div>
                    <button type="button" className="btn btn-primary m-3" onClick={Guardar}>Registrarme</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Signin;
