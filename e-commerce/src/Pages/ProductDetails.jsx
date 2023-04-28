import { useContext } from "react";
import {CarrinhoContexto} from "../Context/CarrinhoContexto";
import {Error404} from './Error404'

//                              ROTAS PARÂMETRIZADAS      

function ProductDetails (props){
    // 1) Importando produtos de Context para a page ProductDetails. (Afim de que o E-commerce fique performático).
    const {produtos, setData} = useContext(CarrinhoContexto);
    // 2) Dentro do props, acesso o params para pegar a Id; E - por vir em tipo String - converto-o em tipo Number.
    const id = Number(props.match.params.id);
    // 3) E os produtos que advém do contexto, faço uma condição (nessa variável) de que os valores deste tem de ser 
    // estritamente igual com o que virá no parâmetro, utilizando o método Find.
    const product = produtos.find(products => products.id === id) 
    
    return(
        <div className="productDetails">
        {/* 4) E, por fim, exibo na tela o product de acordo com a propriedade desejada.*/}

            {/* 4.1) Se existir essa propriedade parâmetriza, renderize.*/}
            { product &&
                <div>
                    <h1>{product.title}</h1>
                    <img id="imageProduct"src={product.image} alt=""></img>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            }

            {/* 4.2) Se não, renderize o component Error404.*/}
            { !product &&
                <div>
                    <Error404/>
                </div>
            }

        </div>
    )

}

export default ProductDetails;