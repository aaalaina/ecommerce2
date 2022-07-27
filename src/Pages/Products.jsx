
import React from 'react';
import Axios from "axios";
import { useEffect, useState } from "react";
import DisplayCard from '../Components/DisplayCard'
export default function Products() 
    const getProducts = () => {
   Axios.get('https://fuwafuwapets.herokuapp.com/ProductList')
   .then(response => {
    console.log(response)
   }).catch(error => {
    console.log(error)
   })
   }