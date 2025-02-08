// import { useDispatch, useSelector } from "react-redux"
// import { addToCart } from "../Store/store";

// import "./All_CssFiles/AllItemsUsingSame.css"  // import separeta css file

// export const Nonveg=()=>{

//    const nonvegitems =  useSelector((data)=>data.products.nonveg);
//    const dispatch = useDispatch();
//    const nonvegDetails = nonvegitems.map((item,index)=>(
//             <li key={index} className="item" >
//                {item.image}- {item.name}- {item.price}
//                 <button onClick={()=>dispatch(addToCart(item))} className="add-to-cart-btn" >Add to Cart</button>
//             </li>
//    ))

//     return (
//         <>
//         <h1  > Non Veg Items </h1>
//         <ol className="list" >{nonvegDetails}</ol>
//         </>
//     )
// }


import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/store";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./All_CssFiles/AllItemsUsingSame.css";  // import separate CSS file

export const Nonveg = () => {
   const nonvegitems = useSelector((data) => data.products.nonveg);
   const dispatch = useDispatch();

   const nonvegDetails = nonvegitems.map((item, index) => (
       <div key={index} className="card m-2" style={{ width: "18rem" }}>
           <img src={item.image} className="card-img-top" alt={item.name} />
           <div className="card-body text-center">
               <h5 className="card-title">{item.name}</h5>
               <p className="card-text">Price: ${item.price}</p>
               <button onClick={() => dispatch(addToCart(item))} className="btn btn-primary">Add to Cart</button>
           </div>
       </div>
   ));

   return (
       <div className="container mt-4">
           <h1 className="text-danger text-center">Non Veg Items</h1>
           <div className="d-flex flex-wrap justify-content-center">{nonvegDetails}</div>
       </div>
   );
};
