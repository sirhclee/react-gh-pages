import React from "react";

const Checkout = props =>{
    return (
        <div>
            <h1> Your Party: </h1> 
            <ul> 
            {Object.entries(props.cart).map(([key, value]) => {
                return <li key={key}>
                             {value[0]}x {key} ({value[1]} gold)
                    </li>            
                    })
                }
            </ul>
            <h3>Total: {props.total} gold </h3>
            <button onClick={()=>{alert('Good luck!');
                props.resetCart();}}>Contract Mercenaries</button>
        </div>
    )
}

export default Checkout;  