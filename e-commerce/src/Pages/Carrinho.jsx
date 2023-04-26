import { useContext } from "react";
import {CarrinhoContexto} from "../Context/CarrinhoContexto";
import {Link} from 'react-router-dom'

function Carrinho(){

    const {produtos, setData} = useContext(CarrinhoContexto);

    return(
        <>
            <div>
                <h1>Carrinho</h1>
                {
                    produtos.map((e)=>{
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


export default Carrinho