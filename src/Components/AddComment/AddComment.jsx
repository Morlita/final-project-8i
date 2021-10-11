import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";


function AddComment({recipeId, reloadFlag, setReloadFlag}) {

    let history = useHistory();

    const [data, setData] = useState(null);
    const [comments, setComments] = useState([]);
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    const user = JSON.parse(localStorage.getItem("registerLogIn"));

    const getData = (val) => {
        if(!user){
            history.push("/login");
            alert("Inicie secion para dar Comentar");
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
              'x-access-token' : userToken
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
    
    const deleteComment = (index) => {
        fetch(`https://polar-reaches-30197.herokuapp.com/comments/${comments[index]._id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "x-access-token": userToken,
              },
              body: JSON.stringify(),
            }
          ).then((response) => setReloadFlag(response.json()));
    }

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
                    <div>
                        <p key={index}><span className="fw-bold">{userName} {userLastName}</span> {content}
                        <button className="float-end" type="button" onClick={() => deleteComment(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button></p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default AddComment
