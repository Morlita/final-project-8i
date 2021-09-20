import React,{useState, useEffect} from "react";
import Card from "../Card/Card";

function CardMediana(){

    const [cards, setCards] = useState([])

    useEffect(()=>{
       
        fetch("https://polar-reaches-30197.herokuapp.com/recipes/", { // se ejecuta 2 veces
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }})
            .then(res => res.json())
            .then(data => {
                console.log(data) // me trae data 2 veces
                setCards(data) // lo setea como objeto vacio
                console.log(cards) // muestra un objeto vacio
            })
        },[])
        return (
            
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">                    
                    {cards.map((item)=>(
                        <Card key={item._id} title={item.title} time={item.time} img={item.img} likes={item.likes}/>
                    ))}
                </div>

            </div>

            
        );
    
   
   }
    

export default CardMediana;