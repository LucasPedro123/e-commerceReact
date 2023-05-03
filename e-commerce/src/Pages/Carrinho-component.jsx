import { useContext } from "react";
import {CarrinhoContexto} from "../Context/CarrinhoContexto";
import {Link} from 'react-router-dom'
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'

export const Carrinho = ()=>{
    // 1) extraio esse cart embutido no CarrinhoContexto - que, por sua vez, terá o valor 
    // modificado pelo usuário
    const {cart, setCart} = useContext(CarrinhoContexto);


    return(
        <>
            <div>
                <h1>Carrinho</h1>
                {/* 2) Exibo na tela, o cart */}
                {
                    cart.map((e)=>{
                        return (
                            <div key ={e.id}>
                                <h4>{e.title}</h4>
                                <Link to={`/${e.id}`}>
                                    <img src={e.image} alt="gg" />
                                </Link>
                                <h5>R${e.price}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

