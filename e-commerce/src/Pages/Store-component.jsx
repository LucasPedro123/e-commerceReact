import {useContext, useEffect} from "react";
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
import {CarrinhoContexto} from "../Context/CarrinhoContexto";
import {Link} from "react-router-dom"
import '../Assets/global.scss'


export const Store = ()=>{

    const {produtos, setData} = useContext(CarrinhoContexto);
    const {cart, setCart, handleClick} = useContext(CarrinhoContexto)



    return (
        <div className="container-Store">
            <h1>Store </h1>
            <div className="container-products">
                {
                    produtos.map((e)=>{
                        return (
                            <div key ={e.id}>
                                <h4>{e.title}</h4>
                                {/* Faço o direcionamento do Link da imagem em /:category/:id. */}
                                <Link to={`/${e.category}/${e.id}`}>
                                    <img src={e.image} alt="gg" />
                                </Link>
                                <h5>R${e.price}</h5>

                                <button onClick={()=> handleClick(e)}>                                 
                                    {
                                        cart.some(itemCart => itemCart.id === e.id)
                                            // Renderizo o Button CartCheck, se existir elemento.
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
