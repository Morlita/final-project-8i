import React ,{useState} from "react";
import { useHistory } from 'react-router-dom';

function Login (){

    let history = useHistory()

    const [usuario,setUsuario] = useState({
        email:"",
        password:""
    });

    const setUserObj = (event) =>{
        setUsuario({...usuario, [event.target.name]:event.target.value});
    }

    const Guardar = ()=>{

            const data = JSON.stringify({
                email: usuario.email,
                password: usuario.password
            })

              fetch('https://polar-reaches-30197.herokuapp.com/user/login', {
                  headers:{
                      "Accept": "application/json",
                      "Content-Type": "application/json"
                  },
                  method:"POST",
                  body: data
              }).then(response => response.json()
              ).then(data =>{
                    if(!data.token){
                        alert("email o contraseña incorrectos");
                    }
                    else{
                    localStorage.setItem("registerLogIn",JSON.stringify(data))
                    localStorage.setItem("logedUser", JSON.stringify(data.email))
                    alert("usuario logeado con exito")
                    history.push("/")
                    }
                    
                })
                
                
                        
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center">RecetApp</h1>
                <br/>
                <h3 className="text-center">Ingresar</h3>
                <form id ="formLogIn">
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
                    <button type="button" className="btn btn-primary m-3" onClick={Guardar}>Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Login;