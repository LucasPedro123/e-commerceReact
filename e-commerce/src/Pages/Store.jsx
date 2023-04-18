import React, { useEffect, useState } from "react";
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'

export const Store = ()=>{
    const [data, setData] = useState([])

    useEffect(()=> {
        const fetchApi = async ()=>{
            const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
            const response = await fetch(url);  
            const objJson = await response.json()
            setData(objJson.results)
        } 
        fetchApi();   
    },[])

    return (
        <div>
            <h1>Store </h1>
            <div>
                {
                    data.map((e)=>{
                        return (
                            <div key ={e.id}>
                                <h4>{e.title}</h4>
                                <img src={e.thumbnail} alt="" />
                                <h5>R${e.price}</h5>

                                <button >                                 
                                    <BsFillCartPlusFill />
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
