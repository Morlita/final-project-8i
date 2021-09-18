import React,{useState} from "react";
import Card from "../Card/Card";

function CardMediana(){

    const [cards, setCards] = useState({})
    
       
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

        return (
            
            <div>
                
                {cards.map((item,index)=>(
                    <Card key={item._id} title={item.title} time={item.time} img={item.img} likes={item.likes} />
                ))}

            </div>

            
        );
   }
    

export default CardMediana;