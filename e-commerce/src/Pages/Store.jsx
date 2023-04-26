import {useContext} from "react";
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
import {CarrinhoContexto} from "../Context/CarrinhoContexto";
import {Link} from "react-router-dom"



export const Store = ()=>{

    const {produtos, setData} = useContext(CarrinhoContexto);
    
    return (
        <div>
            <h1>Store </h1>
            <div>
                {
                    produtos.map((e)=>{
                        return (
                            <div key ={e.id}>
                                <h4>{e.title}</h4>
                                <Link to={`/${e.id}`}>
                                    <img src={e.image} alt="gg" />
                                </Link>
                                <h5>R${e.price}</h5>
                                <button >                                 
                                    <BsFillCartPlusFill />
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
