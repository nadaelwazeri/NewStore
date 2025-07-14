import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'


const apiValue = createContext();

function AllData({children}) {
    const [api, setApi] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((element) => {
            setApi(element.data.products)
        })
    },[]);
    return (
        <apiValue.Provider value={api}> 
            {children}
        </apiValue.Provider>
    )
}

export { AllData, apiValue }