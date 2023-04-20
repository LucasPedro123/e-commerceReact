import {useContext} from "react";
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
import {CarrinhoContexto} from "../Context/CarrinhoContexto";
import {Link} from "react-router-dom"

function ProductDetails (image){
    console.log(image)
    return(
        <>
            <Link to={`/${image.id}`}>
                <img key={image.thumbnail_id}src={image.thumbnail} alt="hj" />
            </Link>
        </>
    )

}

export const Store = ()=>{

    const {produtos, setData} = useContext(CarrinhoContexto);
    console.log(produtos)
    
    return (
        <div>
            <h1>Store </h1>
            <div>
                {
                    produtos.map((e)=>{
                        return (
                            <div key ={e.id}>
                                <h4>{e.title}</h4>
                                <ProductDetails key={e.id} image={e}/>
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
