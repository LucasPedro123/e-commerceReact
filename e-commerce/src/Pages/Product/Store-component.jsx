import {useContext, useEffect} from "react";
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
import {CarrinhoContexto} from "../../Context/CarrinhoContexto";
import {Link} from "react-router-dom"
import '../../Assets/global.scss'


export const Store = ()=>{

    const {produtos, setData} = useContext(CarrinhoContexto);
    const {cart, setCart, handleClick} = useContext(CarrinhoContexto)



    return (
        <main className="container">
            <h1 className="h2 mb-3">Store </h1>
            <div className="card">
                <div className="card-body">
                    {
                        produtos.map((e)=>{
                            return (
                                <div key ={e.id}>
                                    <h4>{e.title}</h4>
                                    {/* Faço o direcionamento do Link da imagem em /:category/:id. */}
                                    <Link to={`/${e.category}/${e.id}`}>
                                        <img  src={e.image} alt={e.description} width='30%'/>
                                    </Link>
                                    <h5>R${e.price}</h5>


                                    <div className="d-grid gap-2 mt-3">


                                        <button 
                                            onClick={()=> handleClick(e)}
                                            type="button" 
                                            className="btn btn-light"
                                        >                                 
                                        {
                                            cart.some(itemCart => itemCart.id === e.id)
                                                // Renderizo o Button CartCheck, se existir elemento.
                                                ? (<BsFillCartCheckFill/>)
                                                // Se não, renderizo Button CartPlus 
                                                : (<BsFillCartPlusFill/>)
                                        }
                                        </button>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </main>
    )
}
