
import React from 'react';
import Axios from "axios";
import { useEffect, useState } from "react";

const Plushies = () => {
    const [prod, setProd] = useState([])
    useEffect(() => {
        Axios.get('https://fuwafuwapets.herokuapp.com/ProductList').then((response) => {
            /*console.log(response)*/
            setProd(response.data)
        })
    }, []) 
    const filterAlpha = () => {
    Axios.get('https://fuwafuwapets.herokuapp.com/productsInA').then((response) => {
        /*console.log(response)*/
        setProd(response.data)
    })
}
const onChange = e => {
    if(e.target.value === 'alphabet'){
        filterAlpha()
    }
}

    return (
        <div className="Products">
                <select name="order by.." id="menuName" onChange={onChange}>
                    <option value='alphabet'>Alphabetically</option>
                </select>
 
            {prod.map((value, key) => {
                return (
 
 
 
                    <div className="card">
                        <div className="card-img">
                            <img src={`${value.plushimg}`} alt="products" />
 
                    
                            </div>
                       <h2>{value.plushname}</h2>
                       <p>{value.plushdescr}</p>
                       <p className="price">${value.plushprice}</p>
                       <button>Add to cart</button>
                   </div>
               )
           })}
       </div>
   )


}

export default Plushies;