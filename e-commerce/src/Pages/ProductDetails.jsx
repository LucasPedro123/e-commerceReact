import { useEffect, useState} from "react";
import {useParams} from 'react-router-dom' 

function ProductDetails (){

    const [product, setProduct] = useState([]);

    const params = useParams();
    console.log(product)
    useEffect(()=> {
        const fetchApi = async ()=>{
            const url = `https://fakestoreapi.com/products/${params.id}`;
            const response = await fetch(url);  
            const objJson = await response.json()
            setProduct(objJson);
        } 
        fetchApi();   
    },[])

    return(
        <div className="productDetails">
            <h1>{product.title}</h1>
            <img id="imageProduct"src={product.image} alt=""></img>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )

}

export default ProductDetails;