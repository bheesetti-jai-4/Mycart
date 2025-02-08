import { useSelector } from "react-redux"
import "./All_CssFiles/order.css" // import separate css files 


function Order() {
   const cartPurchesDetails = useSelector((state)=>state.purchesDetails);
    const detailsorder = cartPurchesDetails.map((data,index)=>(
        <div key={index} className="order-container" >
             <p>Date :{data.todaydate} </p>
            <ul className="list-group" >
                {data.items.map((product,index)=>(
                    <li key={index} className="list-group-item" >
                        <p> Product Name : {product.name}</p> 
                        <p>product price :{product.price} </p>
                        <p>product Quantity : {product.quantity} </p>
                    </li>
                ))}
            </ul>
            <p>Total Amount : {data.finalprice.toFixed(2)} </p>
        </div>
    ))

  return (
    <>
        {cartPurchesDetails.length >0 ? 
            <div className="container" >
                <h1 className="order-title" >Purches list Details</h1>
                <ul className="order-list">{detailsorder} </ul>
            </div>
            :
            <h1 className="text-center text-danger"> Empty purches list </h1>

        }
    </>
  )
}

export default Order