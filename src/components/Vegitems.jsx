import {  useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/store";

function Vegitems(){

       const vegitems= useSelector((state)=>state.products.veg);  // gatting data form store
       const dispatch = useDispatch();

          let finalvegitems= vegitems.map((product,index)=>(
            <li key={index} >
                {product.name}-${product.price}          
                <button onClick={()=>dispatch(addToCart(product))} >AddCart</button>
            </li>
           ))

    return(
        <>
        <h1>this is vegitems</h1>
        <ol>{finalvegitems}</ol>
        </>
    )
}
export default Vegitems;