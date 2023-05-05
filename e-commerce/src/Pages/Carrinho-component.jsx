import { useContext, useEffect, useState} from "react";
import {CarrinhoContexto} from "../Context/CarrinhoContexto";
import {Link} from 'react-router-dom'
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'

export const Carrinho = ()=>{
    
    const {cart, setCart, produtos} = useContext(CarrinhoContexto);
    // 1) Crio um useState, para reter o total de preços inicial para, depois, ser modificado.
    const [price, setPrice] = useState(0)
    // 2) Faço uma função handlePrice, cujo objetivo é guardar o total dos preços Cart na fun- 
    // ção setPrice acima.
    function handlePrice(){
        // 2.1) Crio a variável para ter-se o valor inicial total.
        let totalPrice = 0;

        // 2.2) Mapeio os itens do Cart. Faço a soma de 0 (valor inicial) + ItemCart.price(to-
        // dos os itens que no cart contém, somará), e, atribuo a esta variável criada.
        cart.map(itemCart => totalPrice += 0 + itemCart.price)
        // 2.3) E o valor total - conforme mostrado acima - ficará na variável, portanto, fal-
        // tará, apenas, relocar esse valor na variável price (do useState)
        setPrice(totalPrice)
        // Sendo assim
    }
    // 3) Uso useEffect é para fins de, toda vez que ser montado o component, renderizar o valor 
    // total.
    useEffect(()=>{
      handlePrice()  
    })

    // 4) Crio uma função, com intrínseco enfoque em remover os produtos do carrinho.
    function handleRemove(e){
        // 4.1) Ao rodar essa variável, vai remover o item do carrinho.
        const filterCart = cart.filter(ItemCart => ItemCart.id !== e.id);
        // 4.2) Exprimo esse array novo, guardando-o, na variável cart.
        setCart(filterCart);
        // Obs: eu rodo novamente o total para que este, atualiza.
        handlePrice();
    }

    return(
        <>
            <div>
                <h1>Carrinho</h1>
                {
                    cart.map((e)=>{
                        return (
                            <div key ={e.id}>
                                <h4>{e.title}</h4>
                                <Link to={`/${e.id}`}>
                                    <img src={e.image} alt="gg" />
                                </Link>
                                <h5>R${e.price}</h5>
                    {/* 4.3) Botão-remove, este, ao ser clicado, rodará a função. */}
                                <button onClick={()=>{handleRemove(e)}}>
                                    Remove
                                </button>
                            </div>
                        )
                    })
                }

                <div>
                    {/* 5) Aqui, de maneira simples, apenas faço a exibição desse total dos preços de price. */}
                    <strong>Total</strong>
                    <span>{price}</span>
                </div>

            </div>
        </>
    )
}

