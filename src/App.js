import React, {useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import priest_img from './Images/priest.webp' ;
import warlock_img from './Images/warlock.webp';
import paladin_img from './Images/paladin.webp';
import warrior_img from './Images/warrior.webp' ;
import rogue_img from './Images/rogue.webp';
import hunter_img from './Images/hunter.webp';

function App() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState({});
  const [heads, setHeads] = useState(0);

  const items = [{name:"Warrior", image:warrior_img, cost:20, quantity:1}, {name:"Rogue", image:rogue_img, cost:30, quantity:1},
      {name:"Hunter", image:hunter_img, cost:30, quantity:1}, {name:"Priest", image:priest_img, cost: 40, quantity:1 },
      {name:"Warlock", image:warlock_img, cost:40, quantity:1}, {name:"Paladin", image:paladin_img, cost: 50,quantity:1}

      
    ]
  
  const addCart = (name, quantity, cost) => { 
      quantity = parseInt(quantity);
      setTotal(total+cost*quantity); 
      setHeads(heads+quantity); 

      if (!cart[name]){setCart({ ...cart, [name]: [quantity, cost ]} ) }         
      else {setCart( { ...cart, [name]: [cart[name][0]+quantity, (cart[name][0]+quantity)*cost ] } )}
  }

  const resetCart = () =>{
    setTotal(0);
    setCart({}); 
    setHeads(0);
  }
  
  const {vals} = cart; 
  
  return (
    <div className="App">
      <header className="App-header">
         <div className="link"><Link to ='/'> Home </Link></div>
         <div className="link"><Link to ='/shop'> Shop </Link></div>
         <div className="link"><Link to ='/checkout'> Check Out ( {heads})</Link></div>
      </header>

      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/shop" element={<Shop items={items} total={total} cart={cart}
          addCart = { (name, quantity, cost)=>{addCart(name, quantity, cost)}} />} />

        <Route path="/checkout" element={<Checkout cart={cart}  total={total} resetCart = {()=>{resetCart()}} />} />
      </Routes>


    </div>
  );
}

export default App;
