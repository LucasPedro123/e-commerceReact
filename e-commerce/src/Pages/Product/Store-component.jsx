import {useContext, useEffect} from "react";
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
import {CarrinhoContexto} from "../../Context/CarrinhoContexto";
import {Link} from "react-router-dom"
// 1. Importando scss - ou a estilização - do Store. 
import './Store-component.scss'


export const Store = ()=>{

    const {produtos, setData} = useContext(CarrinhoContexto);
    const {cart, setCart, handleClick} = useContext(CarrinhoContexto)



    return (
        <>
            <main className="container">
                <h1 className="h2 mb-3">Store </h1>

                <section className="card">
                    <div className="card-body">
                        { produtos &&
                            produtos.map((e)=>{
                                return (
                                    <div className="products" key ={e.id}>
                                        {/* 2. Mudando a rota - o destino local. */}
                                        <Link to={`/phone/${e.id}`}>
                                            <img  className="imgPhone" src={e.thumbnail} alt={e.title} />
                                        </Link>
                                        <h5>R${e.price}</h5>

                                            <button 
                                                onClick={()=> handleClick(e)}
                                                type="button" 
                                                className="btn btn-light"
                                            >                                 
                                            {
                                                cart.some(itemCart => itemCart.id === e.id)
                                                    // Renderizo o Button CartCheck, se existir elemento.
                                                    ? (<BsFillCartCheckFill/>)
                                                    // Se não, renderizo Button CartPlus.
                                                    : (<BsFillCartPlusFill/>)
                                            }
                                            </button>
                                            <button
                                                type="button" 
                                                className="btn btn-primary"
                                            >
                                                Saiba mais
                                            </button>
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                </section>

            </main>
        
        </>
        
    )
}
