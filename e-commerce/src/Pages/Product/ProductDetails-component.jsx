import { useContext } from "react";
import {CarrinhoContexto} from "../../Context/CarrinhoContexto";
import {Error404} from '../Not-found/Error404-component'
// 1) Importo os ícones do React, para colocá-los no button.
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'



//                              ROTAS PARÂMETRIZADAS      

export const ProductDetails = (props)=>{
    // 1.1) Importando handleClick ↓.
    const {produtos, setData, handleClick, cart} = useContext(CarrinhoContexto);
    const id = Number(props.match.params.id);
    console.log("dijdsdkso")
    const product = produtos.find(products => products.id === id) 
    
    return(
        <div className="productDetails">
            { product &&
                <div>
                    <h1>{product.title}</h1>
                    <img id="imageProduct"src={product.image} width="30%" alt=""></img>
                    <h5>R${product.price}</h5>
                    <p>{product.description}</p>
                    {/*
                       1.2) Ao ser clicado o botão, executa a função handleClick(); dando-lhe,
                       também, o "product" como parâmetro. Dentro desse botão, terá a função   
                       handleClick que, por sua vez, vai guardar o product que o usuário clicou.
                    */}
                    <button onClick={()=> handleClick(product)}>                                 
                    {/* 2) Condição de qual IconsButton renderizará. */}
                    {
                        // Assim como no Store, essa condição renderizará se os elementos do 
                        // "ItemCard.id" (carrinho) são estritamente igual com "product.id".
                        // Se sim, significa que já tenho o elemento no meu carrinho:
                        cart.some(itemCart => itemCart.id === product.id)
                        // Renderizo o Button CartCheck, se existir o elemento.
                        ? (<BsFillCartCheckFill/>)
                        // Se não, renderizo Button CartPlus 
                        : (<BsFillCartPlusFill/>)
                    }
                    </button>
                </div>
            }
            { !product &&
                <div>
                    <Error404/>
                </div>
            }


        </div>
    )

}
