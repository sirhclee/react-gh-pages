import React from "react";
import tavern from "../Images/tavern.webp";

const Home = () =>{
    return (
        <div>
            <h1>Welcome to the Mercenary Tavern</h1>
            <p>All sorts of tough folks looking for work here</p>
            <img src={tavern} width="700px" class="center"/>
        </div>
    )
}

export default Home; 