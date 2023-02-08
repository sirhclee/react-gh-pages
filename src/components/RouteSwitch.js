import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Checkout from "./Checkout";
import React, {useEffect, useState} from "react"; 
import priest_img from '../Images/priest.webp' 
import warlock_img from '../Images/warlock.webp'
import paladin_img from '../Images/paladin.webp'

const RouteSwitch = () =>{

    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState({});

    const items = [{name:"Priest", image:priest_img, cost: 40},
        {name:"Warlock", image:warlock_img, cost:40}, {name:"Paladin", image:paladin_img, cost: 50}]
    
    const addCart = (name, quantity, cost) => { 
        setTotal(total+cost*quantity); 

        if (!cart[name]){setCart({ ...cart, [name]: [quantity, cost ]} ) }         
        else {setCart( { ...cart, [name]: [cart[name][0]+quantity, (cart[name][0]+quantity)*cost ] } )}
        console.log(cart, name)
        //setCart(cart.concat([name, quantity]))

    }
    
    const {vals} = cart; 


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/shop" element={<Shop items={items} total={total} cart={cart}
                addCart = { (name, quantity, cost)=>{addCart(name, quantity, cost)}} />} />
                <Route path="/checkout" element={<Checkout cart={cart}/>} />

            </Routes>
        
        </BrowserRouter>
    );
};

export default RouteSwitch;
