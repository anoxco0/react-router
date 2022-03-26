import { Link } from "react-router-dom"



export const Navbar =()=>{

    return (
        <div className="navbar">
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>All Products</Link>
        </div>
    )
}