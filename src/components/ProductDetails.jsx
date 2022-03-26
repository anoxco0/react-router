import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";

export const ProductDetails = () =>{
   const [product, setProduct] = useState([]);
   const {id} = useParams();
   useEffect(()=>{
       axios.get(`http://localhost:8080/products/${id}`).then((res)=>setProduct(res.data));
    },[id]);

    return (
        <>
        {product.length!==0?<div>
            <div>Id :{product.id}</div>
           <div>Product Name:{product.name}</div>
           <div>Product Price:{product.price}</div>
        </div>:<ErrorPage />}
        </>
    )
}