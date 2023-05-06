import {createContext, useState, useEffect} from "react";
//1) Importando as constantes de Service para o cart.
import {setItem, getItem} from '../Service/localStorageCart'
const CarrinhoContexto = createContext();

function CarrinhoContextoProvider( props ){
    
    const [produtos, setData] = useState([]);
    // 2) Faço que, os valores iniciais do Cart tem de ser: ou valores
    // no localStorage(esses valores são os itens que o usuário salvou
    // no localStorage) ou em uma array vazia.
    const [cart, setCart] = useState(getItem('carrinho') || []);


    const handleClick = (e)=>{


        const element = cart.find((ItemCart) => ItemCart.id === e.id)

        if(element){


            const filterCart = cart.filter(ItemCart => ItemCart.id !== e.id);
            // Aqui removerá a array presente no cart.
            setCart(filterCart)
            // 3) Uso a constante importada de Service, a setItem. Eu alcunho-na como 'carrinho'
            // e salvo o resultado dessa nova array, em localStorage - este a tratará.
            setItem('carrinho', filterCart)
            console.log("Removido: ",e)
        } 

        else{

            setCart([...cart, e])
            // 4) Faço salvar todos os itens que o usuário possuir ou salvar no carrinho, em localStorage.
            setItem('carrinho', [...cart, e])
            // Portanto, todos itens que ir e vir do carrinho estará, também, sendo salvos no loc-
            // alStorage.

            console.log("Adicionado: ", e)
        }

        
    }

    useEffect(()=>{
        console.log("Cart: ",cart)
    }, [cart])

    useEffect(()=> {
        const fetchApi = async ()=>{
            const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url);  
            const objJson = await response.json()
            setData(objJson);
        } 
        fetchApi();   
    },[])

    

    return(
        <CarrinhoContexto.Provider value={{produtos, setData, cart, setCart, handleClick}}>
                {props.children}
        </CarrinhoContexto.Provider>
    )
}

export  {CarrinhoContexto, CarrinhoContextoProvider}