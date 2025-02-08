// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../Store/store";
// import "./All_CssFiles/AllItemsUsingSame.css";

// function Veg(){

//     const vegitems = useSelector((vegitems)=>vegitems.products.veg); // get data from store 
//     const dispatch = useDispatch();

//     const vegDetails = vegitems.map((item,index)=>(
//         <li key={index} className="item" >
//            {item.image}- {item.name} - {item.price}
//             <button onClick={()=>dispatch(addToCart(item))} className="add-to-cart-btn"  > Add to cart</button>
//         </li>
//     ))

//     return(
//         <>
//         <h1>Veg items </h1>
//         <ol className="list"  >{vegDetails}</ol>
//         </>
//     )
// }
// export default Veg;

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/store";
import "bootstrap/dist/css/bootstrap.min.css";

function Veg() {
    const vegitems = useSelector((vegitems) => vegitems.products.veg); // get data from store 
    const dispatch = useDispatch();

    const vegDetails = vegitems.map((item, index) => (
        <div key={index} className="card m-2" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <button onClick={() => dispatch(addToCart(item))} className="btn btn-primary  ">Add to cart</button>
            </div>
        </div>
    ));

    return (
        <div className="container mt-4">
            <h1 className="text-success text-center">Veg Items</h1>
            <div className="d-flex flex-wrap justify-content-center">{vegDetails}</div>
        </div>
    );
}

export default Veg;
