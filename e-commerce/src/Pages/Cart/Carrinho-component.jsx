import { useContext, useEffect, useState} from "react";
import {CarrinhoContexto} from "../../Context/CarrinhoContexto";
import {Link} from 'react-router-dom'
// 1. Importando scss - ou a estilização - do carrinho. 
import './Cart-component.scss'


export const Carrinho = ()=>{
    
    const {cart, setCart, produtos, setItem} = useContext(CarrinhoContexto);

    const [price, setPrice] = useState(0)

    function handlePrice(){

        let totalPrice = 0;

        cart.map(itemCart => totalPrice += 0 + itemCart.price)
   
        setPrice(totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))

    }
   
    useEffect(()=>{
      handlePrice()  
    })

    function handleRemove(e){

        const filterCart = cart.filter(ItemCart => ItemCart.id !== e.id);

        setCart(filterCart);

        setItem('carrinho', filterCart)

        handlePrice();
    }

    return(
        <>
            <section>
                <h1 className="card-title">Carrinho</h1>
                <div className="card-body">
                
                    {/* Exibo na tela os itemCart do usuário. */}
                        {
                            cart.map((e)=>{
                                return (
                                    <div className="products" key={e.id}>

                                        <Link to={`/phone/${e.id}`}>
                                            <img src={e.thumbnail}  alt={e.title}  />
                                        </Link>
                                        <h5>R${e.price}</h5>

                                        <button className="btn btn-primary"onClick={()=>{handleRemove(e)}}>
                                            Remove
                                        </button>
                                    </div>
                                )
                            })
                        }
                </div>

                <div >
                        <strong>Total </strong>
                        <span>{price}</span>
                </div>

            </section>
        </>
    )
}

