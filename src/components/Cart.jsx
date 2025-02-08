// import { useDispatch, useSelector } from "react-redux"
// import { addPurcheDetails, clearcart, decrement, increment, remove } from "../Store/store";
// import { useState } from "react";

// import "./All_CssFiles/Cart.css";  //import   separate css file   // form cart.css 



// function Cart(){

//    const cartobject = useSelector((state)=>state.cart);
//     const dispatch = useDispatch();

    

//     const details = cartobject.map((item,index)=>(
//         <li key={index}>
//            {item.image} -{item.name} - {item.price} 
//             <button onClick={()=>dispatch(increment(item))} >add + </button>
//             quantity: {item.quantity}  <button onClick={()=>dispatch(decrement(item))} >sub - </button>
//             <button onClick={()=>dispatch(remove(item))} >Remove</button>
             
//         </li>
//     ))


  


//     // calculate total price 
//     const totalAmount = cartobject.reduce((sum,item)=>sum+item.price*item.quantity,0);

//     // calculae discountpercentage 
//     const [discountPercentage,setdiscountPercentage] = useState(0);

//     // cal discountamoount
//     const discountAmount = totalAmount * discountPercentage/100;

//     //cal final price
//     const finalPrice = totalAmount - discountAmount;

//     // showing dixcount applayed after shows
//     const [showDiscount,setshowDiscount]=useState(false);

//     //coupon code applayed by using text input
//     const [couponcoad,setcouponcoad]=useState("");
//     const [couponDiscount,setcouponDiscount]=useState(0);
//     // use this coupons like 
//     const couponStoreaction = ()=> {
//         switch (couponcoad.toUpperCase().trim() )
//              {
//                 case "RATAN10":setcouponDiscount(10);
//                 setcouponShow(true);
//                 break;
//                 case "RATAN20" :setcouponDiscount(20);
//                 setcouponShow(true);
//                 break;
//                 case "RATAN30" :setcouponDiscount(30);
//                 setcouponShow(true);
//                 break;
//                 default:alert("you enter wrong coupon code");
//                 setcouponDiscount(0);
//                 setcouponShow(false);
                
//             }
//         }
//         // coupon discount amount 
//         const couponDiscounAmount = finalPrice * couponDiscount/100; 

//         //net amount 
//         const couponTotalAmount = finalPrice - couponDiscounAmount;

//         // show and hide coupon amount and net amoutn
//         const [couponShow,setcouponShow]=useState(false);


//         // ###########################################################################
//             // add only carty applay overall discount

//         const overAllFinalDiscountAmount = finalPrice * couponDiscount/100;
        
//         const overAllFinalPrice = finalPrice - overAllFinalDiscountAmount;

//         const [displayFinalPrice,setdisplayFinalPrice] = useState(true);

//         // #########################################################################################
        

//         // create purches details object add 
//         const handlepurchesDetails = ()=>{
//          // purches pubbot logic add 
//         const todaydate = new Date().toLocaleDateString();
//         // create one object 
//         const purchesObject = { items:[...cartobject],finalprice:overAllFinalPrice,todaydate:todaydate};
//         // using dispatch  
//         // cosnt dispatchDetsila = useDispatch();
//             dispatch(addPurcheDetails(purchesObject));
//         }



   
//    return(   
//         <>  
//         {/* {treu ? "true condition" : "false condition"} */}
//         {
//             cartobject.length > 0 ? 
//             <div>
//                 <h1>cart items </h1>
//                 <ul> {details} </ul>
//                 <p>Total price :{totalAmount.toFixed(2)} </p>

//                  {
//                     showDiscount &&  
//                         <div>
//                             <p>Discount Percentage  :{discountPercentage.toFixed(2)} </p>
//                             <p>Discount Amount  : {discountAmount.toFixed(2)} </p>
//                         </div>
                    
//                  }

//                 <p>Final price : {finalPrice.toFixed(2)} </p>

//                 <button onClick={()=>{setdiscountPercentage(10),setshowDiscount(true),setdisplayFinalPrice(false)}} >Applay 10%</button>
//                  <button onClick={()=>{setdiscountPercentage(20),setshowDiscount(true),setdisplayFinalPrice(false)}} >Applay 20%</button>
//                  <button onClick={()=>{setdiscountPercentage(30),setshowDiscount(true),setdisplayFinalPrice(false)}} >Applay 30%</button> 

//                  <p> Coupon coad Applayed : 
//                  <input 
//                   type="text" 
//                   placeholder="enteer your copuon code"
//                   value={couponcoad}
//                   onChange={(e)=>setcouponcoad(e.target.value)}
//                   />
//                   <button onClick={()=>{couponStoreaction(),setdisplayFinalPrice(false)}} >Applay Coupon </button>
//                   </p>

//                   <p>you write couponcoad is : {couponcoad.toUpperCase()} </p>

//                 {
//                     couponShow &&
//                      <div>
//                         <p>coupon discount : {couponDiscount} </p>
//                          <p>Coupon discount amount : {couponDiscounAmount.toFixed(2)} </p>
//                          <p>coupon final price : {couponTotalAmount.toFixed(2)} </p>
//                     </div>  
//                 }


//                 {/* ###########################################################################  */}
//                     {/* cart loginc overall discount applay coupon coad  */}

//                {
//                     couponShow && 
//                         <div>
//                              <h1>cart final price</h1>
//                              <p>coupon discount  : {couponDiscount} </p>
//                            <p>over all discount applay coupon amount : {overAllFinalDiscountAmount.toFixed(2)} </p>
//                               <p>Overall final price : {overAllFinalPrice.toFixed(2)} </p>
//                         </div>
//                }

//                 {
//                     showDiscount  &&
//                         <div>
//                              <p>Overall final price : {overAllFinalPrice.toFixed(2)} </p>
//                         </div>
                    
//                  }

//                 {
//                     displayFinalPrice &&
//                     <div>
//                         <p>Overall final price : {overAllFinalPrice.toFixed(2)} </p>
//                     </div>
//                 }       

//                 {/* ############################################################################ */}
//                 {/* purches button add  */}
                
                
//                 <button onClick={()=>{handlepurchesDetails();dispatch(clearcart())}} >Purches  </button>

//             </div>
//             :
//             <p>cart empty!</p>
//         }
//         </>
//     )
// }
// export default Cart;



import { useDispatch, useSelector } from "react-redux";
import { addPurcheDetails, clearcart, decrement, increment, remove } from "../Store/store";
import { useState } from "react";
import "./All_CssFiles/Cart.css"; // Import separate CSS file

function Cart() {
    const cartobject = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalAmount = cartobject.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const [discountPercentage, setdiscountPercentage] = useState(0);
    const discountAmount = totalAmount * discountPercentage / 100;
    const finalPrice = totalAmount - discountAmount;

    const [couponcoad, setcouponcoad] = useState("");
    const [couponDiscount, setcouponDiscount] = useState(0);
    const [couponShow, setcouponShow] = useState(false);

    const couponStoreaction = () => {
        switch (couponcoad.toUpperCase().trim()) {
            case "RATAN10":
                setcouponDiscount(10);
                setcouponShow(true);
                break;
            case "RATAN20":
                setcouponDiscount(20);
                setcouponShow(true);
                break;
            case "RATAN30":
                setcouponDiscount(30);
                setcouponShow(true);
                break;
            default:
                alert("Invalid Coupon Code");
                setcouponDiscount(0);
                setcouponShow(false);
        }
    };

    const couponDiscounAmount = finalPrice * couponDiscount / 100;
    const couponTotalAmount = finalPrice - couponDiscounAmount;

    const handlepurchesDetails = () => {
        const todaydate = new Date().toLocaleDateString();
        const purchesObject = { items: [...cartobject], finalprice: couponTotalAmount, todaydate: todaydate };
        dispatch(addPurcheDetails(purchesObject));
        dispatch(clearcart());
    };

    return (
        <>
            {cartobject.length > 0 ? (
                <div className="container mt-4">
                    <h1 className="text-success text-center">Cart Items</h1>

                    <div className="row">
                        {cartobject.map((item, index) => (
                            <div key={index} className="col-md-2 col-sm-4 mb-3">
                                <div className="card shadow-sm text-center">
                                    <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "150px", objectFit: "cover" }} />
                                    <div className="card-body">
                                        <h6 className="card-title">{item.name}</h6>
                                        <p className="card-text">₹{item.price.toFixed(2)}</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-success btn-sm" onClick={() => dispatch(increment(item))}> + </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button className="btn btn-outline-danger btn-sm" onClick={() => dispatch(decrement(item))}> - </button>
                                        </div>
                                        <button className="btn btn-danger btn-sm mt-2 w-100" onClick={() => dispatch(remove(item))}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Price & Coupon Box */}
                    <div className="row mt-4">
                        <div className="col-md-6 offset-md-3">
                            <div className="card p-3 shadow-sm">
                                <h5 className="fw-bold">Total Price: ₹{totalAmount.toFixed(2)}</h5>

                                {discountPercentage > 0 && (
                                    <div className="alert alert-info">
                                        <p>Discount Percentage: {discountPercentage}%</p>
                                        <p>Discount Amount: ₹{discountAmount.toFixed(2)}</p>
                                    </div>
                                )}

                                <h5 className="fw-bold">Final Price: ₹{finalPrice.toFixed(2)}</h5>

                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-success" onClick={() => setdiscountPercentage(10)}>10% Off</button>
                                    <button className="btn btn-success" onClick={() => setdiscountPercentage(20)}>20% Off</button>
                                    <button className="btn btn-success" onClick={() => setdiscountPercentage(30)}>30% Off</button>
                                </div>

                                <div className="mt-3">
                                    <p>
                                        Coupon Code:
                                        <input
                                            type="text"
                                            className="form-control d-inline w-50 mx-2"
                                            placeholder="Enter coupon"
                                            value={couponcoad}
                                            onChange={(e) => setcouponcoad(e.target.value)}
                                        />
                                        <button className="btn btn-warning" onClick={couponStoreaction}>Apply</button>
                                    </p>
                                </div>

                                {couponShow && (
                                    <div className="alert alert-warning">
                                        <p>Coupon Discount: {couponDiscount}%</p>
                                        <p>Coupon Discount Amount: ₹{couponDiscounAmount.toFixed(2)}</p>
                                        <p>Final Price After Coupon: ₹{couponTotalAmount.toFixed(2)}</p>
                                    </div>
                                )}

                                <button className="btn btn-primary w-100 mt-3" onClick={handlepurchesDetails}>Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className="text-center text-danger ">Cart is Empty!</h1>
            )}
        </>
    );
}

export default Cart;
