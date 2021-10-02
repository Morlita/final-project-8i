import React ,{useState} from "react";
import {useHistory } from 'react-router-dom';

function Signin (){

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

    const Guardar = ()=>{

        if(usuario.name === "" || usuario.name.length > 30){
            alert("Nombre invalido")
        }
        else if(usuario.lastName === "" || usuario.lastName.length > 30){
            alert("appellido invalido")
        }
        else if(usuario.email === "" || !usuario.email.includes("@")){
            alert("email invalido")
        }
        else if(usuario.password === "" || usuario.password.length < 6){
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
                    alert("registro exitoso");
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
