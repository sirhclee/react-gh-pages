import React from "react";
import Card from './Card';
import Checkout from "./Checkout";

const Shop = (props) =>{

    return (
        <div>
            <h1>Hire Your Mercenaries!</h1>
            <p>Your total: {props.total} gold</p>

            <div className = "cards-container">
                {props.items.map( (item)=> {
                    return <Card source = {item.image} name ={item.name} cost = {item.cost} quantity = {item.quantity} 
                    addCart = { (name, quantity, cost)=>{props.addCart(name, quantity, cost)}} 
                    key = {item.name}/>             
                })}
            </div>
        </div>
    )
}

export default Shop; 