import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";


function AddComment({recipeId, reloadFlag, setReloadFlag}) {

    let history = useHistory();

    const [data, setData] = useState(null);
    const [comments, setComments] = useState([]);
    const tokenUser = JSON.parse(localStorage.getItem("userToken"));
    const user = JSON.parse(localStorage.getItem("registerLogIn"));

    const getData = (val) => {
        if(!user){
            history.push("/login");
            alert("Inicie secion para dar Me Gusta");
        }else{
        setData(val.target.value)
        console.log(data);
        }
    }

    const getComments = async () => {
        await fetch(`https://polar-reaches-30197.herokuapp.com/comments/${recipeId}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDE4MTFkZWVhYTQwODAzMjIyOTAxZiIsImlhdCI6MTYzMTY4OTMwMywiZXhwIjoxNjMxNzc1NzAzfQ.zYvdpjTq4wJrul5dPEKP43Hrd35JsJYjpNWhfLcj4BQ"
              }
        })
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(err => console.log(err))
    }
 
    const setComment = async () => {
        if(data === "" || data === null || data === " "){
            alert("Realice un comentario antes")
        }else {
            await fetch( "https://polar-reaches-30197.herokuapp.com/comments", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token' : tokenUser
            },
            body: JSON.stringify({
                content: data,
                recipeId: recipeId,
                userId: user._id
            })
        })
        .then((response) => setReloadFlag(response.json()))
        }
    }
    // POST data to endpoint

    useEffect(() => {
        getComments();
    }, [reloadFlag])

    console.log("COMENTS", comments)

    return (
        <div className="container">
            <div className='d-flex justify-content-center'>
                <form action="" className=''>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingAddComment" aria-describedby="addComent" onChange={getData} maxLength="500"></textarea>
                        <label htmlFor="floatingAddComment">Danos tu opinión!</label>
                        <div id="floatingAddComment" className="form-text">
                            Tu comentario nos interesa! Contanos qué te pareció la receta (máx. 500 caracteres).
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <button type="button" className="btn btn-outline-secondary rounded-pill" onClick={()=> setComment()}>Enviar comentario</button>
                    </div>
                </form>   
            </div>
            <div>
                <h4 className="mt-3">Comentarios:</h4>
                {comments.length === 0 ? <div id="floatingAddComment" className="form-text">Esta receta aun no tiene comentarios</div>: comments.map(({userName, userLastName, content}, index) => (
                    <p key={index}><span className="fw-bold">{userName} {userLastName}</span> {content}</p>
                ))}
            </div>
        </div>
        
    )
}

export default AddComment
