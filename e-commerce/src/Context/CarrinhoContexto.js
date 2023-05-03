import {createContext, useState, useEffect} from "react";

const CarrinhoContexto = createContext();

function CarrinhoContextoProvider( props ){
    
    const [produtos, setData] = useState([]);
    // 1) Crio o cart com useState, para guardar elementos que estão no carrinho. E faço redistribuir o cart para
    // toda a aplicação dentro do contexto. 
    const [cart, setCart] = useState([]);


    //Adicionando elemento ao ser clicado o botão
    const handleClick = (e)=>{
        // 2.1) Crio uma Varíavel que verifica se os elementos do Cart.id é estritamente igual com e.id (este é 
        // o produtos passado como parâmetro). Se sim, significa que já tenho o produto no meu carrinho.
        const element = cart.find((ItemCart) => ItemCart.id === e.id)
        // 2.2) Condição:
        if(element){
            // Digo, então, que o elemento do itemCart.id tem que ser diferente dos elementos produtos.id;
            // por conseguinte, isso removerá o elemento que se estava contido no ItemCart ao ser clicado.
            const filterCart = cart.filter(ItemCart => ItemCart.id !== e.id);
            // E, faço setar, esse array novo do filterCart no SetCart.
            setCart(filterCart)

            console.log("Removido: ",e)
        } 
        // 2.3) Se não houver esse produto no meu carrinho significa que o usuário quer adicionar
        else{
            //Ou seja vou juntar, todos os produtos que estão no Cart com esse novo recebido.
            setCart([...cart, e])
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