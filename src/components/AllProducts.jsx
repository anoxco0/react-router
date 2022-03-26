import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export const AllProducts = ()=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/products').then((res)=>setProducts(res.data));
    },[]);
    console.log(products)
    return(
        <div className="All">
           <table>
               <thead>
                   <tr>
                       <th>Product Name</th>
                       <th>Price</th>
                       <th>more details</th>
                   </tr>
               </thead>
               <tbody>
                   {products.map((e)=>
                   <tr key={e.id}>
                       <td>{e.name}</td>
                       <td>{e.price}</td>
                       <td><Link to={`/products/${e.id}`}>more details</Link></td>
                   </tr>
                   )}
               </tbody>
           </table>
        </div>
    )
}