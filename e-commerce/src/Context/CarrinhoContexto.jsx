import {createContext, useState, useEffect} from "react";

const CarrinhoContexto = createContext();

function CarrinhoContextoProvider( props ){
    
    const [produtos, setData] = useState([]);

    useEffect(()=> {
        const fetchApi = async ()=>{
            const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url);  
            const objJson = await response.json()
            setData(objJson);
        } 
        fetchApi();   
    },[])

    useEffect(()=> {
        localStorage.setItem('carrinho', JSON.stringify(produtos))   
    },[produtos])

    return(
        <CarrinhoContexto.Provider value={{produtos, setData}}>
            {props.children}
        </CarrinhoContexto.Provider>
    )
}

export  {CarrinhoContexto, CarrinhoContextoProvider}