import {createContext, useState, useEffect} from "react";

const CarrinhoContexto = createContext();

function CarrinhoContextoProvider( { childre } ){
    
    const [produtos, setData] = useState([]);

    useEffect(()=> {
        const fetchApi = async ()=>{
            const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
            const response = await fetch(url);  
            const objJson = await response.json()
            setData(objJson.results)
        } 
        fetchApi();   
    },[])

    useEffect(()=> {
        localStorage.setItem('carrinho', JSON.stringify(produtos))   
    },[produtos])

    return(
        <CarrinhoContexto.Provider value={{produtos, setData}}>
            {childre}
        </CarrinhoContexto.Provider>
    )
}

export  {CarrinhoContexto, CarrinhoContextoProvider}