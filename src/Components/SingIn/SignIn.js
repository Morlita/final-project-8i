import React ,{useState} from "react";
import { Link } from 'react-router-dom';

function Signin (){

    const formUsuario = document.querySelector("#formUsuario")

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
              })
                  
                alert("registro exitoso");
                formUsuario.reset();
        }
        
    }

    return (
        <div>
            <div>
                <h1 className="text-center">RecetApp</h1>
                <br/>
                <h3 className="text-center">sign in</h3>
                <form id ="formUsuario">
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" aria-describedby="Username" onChange={setUserObj} />
                    </div>
                    <div className="mb-3">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" aria-describedby="Username" onChange={setUserObj}/>
                    </div>
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
                    <button type="button" className="btn btn-primary m-3" onClick={Guardar}>Sign in</button>
                    <Link to="/">
                        <button type="button" className="btn btn-primary">Done</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;
