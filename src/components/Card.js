import React, {useState} from 'react';

const Card = props => {
    const [value, setValue] = useState(1); 

    const handleChange = (e) => {
        setValue(e.target.value); 
    }   

    const options =[ {value:1}, {value:2},{value:3},{value:4} ];
    const message = ""; 
    return (
        <div className ="card" >
            <img className = "card-image" src={props.source} alt={props.name} /> 

            <div className =  "card-name"> {props.name}
                <div className =  "card-cost"> {props.cost} gold</div>

            </div>

            <select value={value} onChange={handleChange}> 
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>

            <button onClick={() => props.addCart(props.name, value, props.cost)}>Hire </button>

        </div> 
    )
}

export default Card;