import {createContext, useState, useEffect} from "react";

import {setItem, getItem} from '../Service/localStorageCart'

const CarrinhoContexto = createContext();

function CarrinhoContextoProvider( props ){
    
    const [produtos, setData] = useState([]);
  
    const [cart, setCart] = useState(getItem('carrinho') || []);


    const handleClick = (e)=>{


        const element = cart.find((ItemCart) => ItemCart.id === e.id)

        if(element){


            const filterCart = cart.filter(ItemCart => ItemCart.id !== e.id);

            setCart(filterCart)

            setItem('carrinho', filterCart)
            console.log("Removido: ",e)
        } 

        else{

            setCart([...cart, e])

            setItem('carrinho', [...cart, e])

            console.log("Adicionado: ", e)
        }

        
    }

    useEffect(()=>{
        console.log("Cart: ",cart)
    }, [cart])

    useEffect(()=> {
        const fetchApi = async ()=>{
            // 1. Mudando a Api para a do Mercado Livre.
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular';
            const response = await fetch(url);  
            const objJson = await response.json()
            // 1.1 Pegando a propriedade da Api.
            setData(objJson.results);
        } 
        fetchApi();   
    },[])

    

    return(
        <CarrinhoContexto.Provider value={{produtos, setData, cart, setCart, handleClick, setItem}}>
                {props.children}
        </CarrinhoContexto.Provider>
    )
}

export  {CarrinhoContexto, CarrinhoContextoProvider}