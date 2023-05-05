import { useContext } from "react";
import {CarrinhoContexto} from "../Context/CarrinhoContexto";
import {Error404} from './Error404-component'
import {BsCart,} from 'react-icons/bs'


//                              ROTAS PARÂMETRIZADAS      

export const ProductDetails = (props)=>{
    const {produtos, setData, handleClick, cart} = useContext(CarrinhoContexto);
    const id = Number(props.match.params.id);
    
    const product = produtos.find(products => products.id === id) 
    
    // 1) Crio o botão que leva para o carrinho com uma condição. Este botão exprimirá o que está dentro da condição; 
    // se o produto já existir no Cart, ele exprimirá "Remover do carrinho" senão "Adicionar no carrinho".
    function CartButton (){
        // 1.1) Const que verifica se os elementos do ItemCart.id é estritamente igual com product.id clicado. Se sim, significa que já tenho o produto no meu carrinho.
        const element = cart.find((ItemCart) => ItemCart.id === product.id)
        // 1.2) Condição desta const acima:
        if(element){
           return <h4>Remover do carrinho</h4>
        } 
        // 1.3) Se não houver esse produto no meu carrinho significa que o usuário quer adicionar. Portanto, exibirá "Adicionar no carrinho".
        else{
            return <h4>Adicionar no carrinho</h4>
        }
    }

    return(
        <div className="productDetails">
            { product &&
                <div>
                    <h1>{product.title}</h1>
                    <img id="imageProduct"src={product.image} alt=""></img>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            }
             {/*
                2) Ao ser clicado o botão, executa a função handleClick(); dando-lhe, também, o "product" como parâmetro.
                Dentro desse botão, estará a função acima descrita.
             */}
            <button onClick={()=> handleClick(product)}>                                 
                <BsCart/>
            </button>

            { !product &&
                <div>
                    <Error404/>
                </div>
            }

        </div>
    )

}
