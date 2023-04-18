import { useContext } from "react";
import {CarrinhoContexto} from "../Context/CarrinhoContexto";

function Carrinho(){
    
    const {produtos, setData} = useContext(CarrinhoContexto);

    return(
        <>
            <div>
                {
                    produtos.map((e)=>{
                        return (
                            <div key ={e.id}>
                                <h4>{e.title}</h4>
                                <img src={e.thumbnail} alt="" />
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