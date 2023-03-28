import React, { useEffect, useState } from "react";

export const Store = ()=>{

const [data, setData] = useState([])

    useEffect(()=> {
        const f = ()=>{
            fetch("https://api.mercadolibre.com/sites/MLB/search?q=celular")
            .then(response =>  response.json())
            .then(datas => {
                return setData(datas.results)
            })
        }

        f();
    }, [])

    return (
        <div>
            <h1>Store</h1>
            {
                data.map((e)=>{
                    <div key ={e.id}>
                        <h4>{e.title}</h4>
                        <img src={e.thumbnail} alt=""/>
                        <h4>{e.price}</h4>
                    </div>
                })
            }
        </div>
    )
}
