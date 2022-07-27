
import React from 'react';
import Axios from "axios";
import { useEffect, useState } from "react";

const Plushies = () => {
    const [prod, setProd] = useState([])
    useEffect(() => {
        Axios.get('https://fuwafuwapets.herokuapp.com/ProductList').then((response) => {
            
            setProd(response.data)
        })
    }, []) 
    const filterAlpha = () => {
    Axios.get('https://fuwafuwapets.herokuapp.com/productsInA').then((response) => {
        
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
            <div>
                <select name="order by" id="menuName" onChange={onChange}>
                    <label value='menu'>menu</label>
                    <option value='alphabet'>Alphabetical Order</option>
                    <option value='ascend'>Low To High</option>
                    <option value='descend'>High To Low</option>
                </select>
                </div>
            {prod.map((value, key) => {
                return (
 
                   
                <div className='flex-container'>
                    <div className="flex-items">
                        <div className='cardContainer'>
                            <img className= "plushimg" src={`${value.plushimg}`} alt="stuffed plushie" />
                           
                        {/* <h1>{value.idproducts}</h1> */}
                       <h2>{value.plushname}</h2>
                       <p><big>{value.plushdescr}</big></p>
                       <p className="price">${value.plushprice}</p>
                       <button className='cartbutton'>Add to cart</button>
                       </div>
                   </div>
                </div>
               )
           })}
       </div>
   )


}

export default Plushies;