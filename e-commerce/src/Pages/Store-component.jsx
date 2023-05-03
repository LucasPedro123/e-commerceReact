import {useContext, useEffect} from "react";
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
import {CarrinhoContexto} from "../Context/CarrinhoContexto";
import {Link} from "react-router-dom"
import '../Styles/Store.css'


export const Store = ()=>{

    const {produtos, setData} = useContext(CarrinhoContexto);
    const {cart, setCart, handleClick} = useContext(CarrinhoContexto)


    
    // 2)
    

    return (
        <div className="container-Store">
            <h1>Store </h1>
            <div className="container-products">
                {
                    produtos.map((e)=>{
                        return (
                            <div key ={e.id}>
                                <h4>{e.title}</h4>
                                <Link to={`/${e.id}`}>
                                    <img src={e.image} alt="gg" />
                                </Link>
                                <h5>R${e.price}</h5>

                                {/*Ao ser clicado o botão, executa a função handleClick(); dando-lhe, também, o "e" como parâmetro*/}
                                <button onClick={()=> handleClick(e)}>                                 
                                    {
                                        // Condição de, se os elementos do "ItemCard.id" (carrinho) forem estritamente igual com "e"
                                        // significa que já tenho o elemento no meu carrinho:
                                        cart.some(itemCart => itemCart.id === e.id)
                                            // Renderizo o Button CartCheck, se existe.
                                            ? (<BsFillCartCheckFill/>)
                                            // Se não, renderizo Button CartPlus 
                                            : (<BsFillCartPlusFill/>)
                                    }
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
