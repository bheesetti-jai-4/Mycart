// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import   "./MyCss.css";
// import Veg from "./components/Veg";
// import { Nonveg } from "./components/Nonveg";
// import  Cart  from "./components/Cart";
// // import Orders from "./components/Orders";
// import ContactUs from "./components/ContactUs";
// import AboutUs from "./components/AboutUs";
// // import Vegitems from "./components/Vegitems";
// import { useDispatch, useSelector } from "react-redux";
// import Order from "./components/Order";
// import Login from "./components/Login";
// import { logout } from "./Store/store";
// import NotFound from "./components/NotFound";

// import "./components/All_CssFiles/AppLooking.css";   // import sepatate css file 


// function App(){
//   const cart = useSelector((state)=>state.cart);
//   const totalitem = cart.reduce((sum,item)=>sum+item.quantity,0);

//    // Get authentication status from Redux store
//   const isAuthenicated =  useSelector((state)=>state.auth.isAuthenicated);
//   const dispatch = useDispatch();

//   return(
//     <>

   

//     <BrowserRouter>
//       <nav className="d-flex justify-content-center p-3" >
//          <Link to="/home" className="myfile" >Home</Link>
//         <Link to="/veg" className="myfile" >VegItems</Link>
//          <Link to="/nonveg" className="myfile">NonvegItems</Link>
//        <Link to="/cart" className="myfile">Cart</Link>
//        {/* <Link to="/orders" className="myfile">Orders</Link> */}
//         <Link to="/contactus" className="myfile">ContactUs</Link>
//         <Link to="/aboutus" className="myfile">AboutUs</Link>
//         {/* <Link to="/allveg" className="myfile">Allvegitems</Link> */}
//         <Link to="/cart" className="myfile">Cart = <span>{totalitem}</span> </Link>
//         <Link to="/order" className="myfile">Orders </Link>


//         {
//           isAuthenicated ? 
//             (  
//               <button onClick={()=>dispatch(logout())} className="myfile"> logout </button>
//             )
//               :
//           <>
//             {/* Show Login if not authenticated, Logout otherwise */}
//             <Link to="/login"  className="myfile">Log in </Link>
//           </>
//         }
        
//       </nav>
    
    
//     <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/veg" element={< Veg />} />
//       <Route path="/nonveg" element={<Nonveg />} />
//       <Route path="/cart" element={<Cart/>} />
//       {/* <Route path="/orders" element={<Orders/>} /> */}
//       <Route path="/contactus" element={<ContactUs/>} />
//       <Route path="/aboutus" element={<AboutUs/>} />
//       {/* <Route path="/allveg" element={<Vegitems/>} /> */}
//       <Route path="/cart" element={< Cart/>} />
//       <Route path="/order" element={<Order />} />
//       <Route path="/login" element={<Login/>} />
//       <Route path="*" element={<NotFound/>} />

//     </Routes>

//     </BrowserRouter>
//     </>
//   )
// }
// export default App;



// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import   "./MyCss.css";
// import Home from "./components/Home";
// import Veg from "./components/Veg";
// import { Nonveg } from "./components/Nonveg";
// import Cart from "./components/Cart";
// import ContactUs from "./components/ContactUs";
// import AboutUs from "./components/AboutUs";
// import Order from "./components/Order";
// import Login from "./components/Login";
// import NotFound from "./components/NotFound";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "./Store/store";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
// import Footer from "./components/Footer";
// // FontAwesomeIcon using 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// import { faHouse,faCarrot,faDrumstickBite,faPhone,faAddressCard,faThumbsUp,faCartShopping } from "@fortawesome/free-solid-svg-icons"; 


// function App() {
//   const cart = useSelector((state) => state.cart);
//   const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const isAuthenicated = useSelector((state) => state.auth.isAuthenicated);
//   const dispatch = useDispatch();

//   return (
//     <BrowserRouter>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
//         <div className="container">
//           {/* Brand */}
//           <Link to="/home" className="navbar-brand fw-bold fs-3">
//             🛒 MyStore
//           </Link>

//           {/* Toggle Button for Mobile View */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar Links */}
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto ">
//               <li className="nav-item m-3 " >
//               <FontAwesomeIcon icon={faHouse} />
//               <Link to="/home" className="nav-link">Home</Link>
//               </li>
//               <li className="nav-item m-3 "><FontAwesomeIcon icon={faCarrot} />
//                 <Link to="/veg" className="nav-link">Veg Items</Link>
//               </li>
//               <li className="nav-item m-3 "><FontAwesomeIcon icon={faDrumstickBite} />
//                 <Link to="/nonveg" className="nav-link">Non-Veg Items</Link>
//               </li>
//               <li className="nav-item m-3 "><FontAwesomeIcon icon={faPhone} />
//                 <Link to="/contactus" className="nav-link">Contact Us</Link>
//               </li>
//               <li className="nav-item m-3 "><FontAwesomeIcon icon={faAddressCard} />
//                 <Link to="/aboutus" className="nav-link">About Us</Link>
//               </li>
//               <li className="nav-item m-3 "><FontAwesomeIcon icon={faThumbsUp}  />
//                 <Link to="/order" className="nav-link">Orders</Link>
//               </li>
//               <li className="nav-item m-3 ">
//                 <Link to="/cart" className="nav-link position-relative">
//                   Cart <FontAwesomeIcon icon={faCartShopping} />
//                   <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
//                     {totalItem}
//                   </span>
//                 </Link>
//               </li>

//               {/* Authentication Buttons */}
//               {isAuthenicated ? (
//                 <li className="nav-item m-3  ">
//                   <button
//                     className="btn btn-outline-light ms-2"
//                     onClick={() => dispatch(logout())}
//                   > Log out
//                   </button>
//                 </li>
//               ) : (
//                 <li className="nav-item m-3 ">
//                   <Link to="/login" className="btn btn-warning ms-2">Login  </Link>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/veg" element={<Veg />} />
//         <Route path="/nonveg" element={<Nonveg />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/contactus" element={<ContactUs />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/order" element={<Order />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       {/* footer  */}
//       <Footer/>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./MyCss.css";
import Home from "./components/Home";
import Veg from "./components/Veg";
import { Nonveg } from "./components/Nonveg";
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Order from "./components/Order";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Store/store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import Footer from "./components/Footer";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { 
  faHouse, faCarrot, faDrumstickBite, 
  faPhone, faAddressCard, faThumbsUp, faCartShopping 
} from "@fortawesome/free-solid-svg-icons"; 

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isAuthenicated = useSelector((state) => state.auth.isAuthenicated);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">
          {/* Brand */}
          <Link to="/home" className="navbar-brand fw-bold fs-3">
            🛒 MyStore
          </Link>

          {/* Toggle Button for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex gap-3 align-items-center">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  <FontAwesomeIcon icon={faHouse} className="me-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/veg" className="nav-link">
                  <FontAwesomeIcon icon={faCarrot} className="me-2" /> Veg Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nonveg" className="nav-link">
                  <FontAwesomeIcon icon={faDrumstickBite} className="me-2" /> Non-Veg Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link">
                  <FontAwesomeIcon icon={faPhone} className="me-2" /> Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  <FontAwesomeIcon icon={faAddressCard} className="me-2" /> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/order" className="nav-link">
                  <FontAwesomeIcon icon={faThumbsUp} className="me-2" /> Orders
                </Link>
              </li>

              {/* Cart */}
              <li className="nav-item position-relative">
                <Link to="/cart" className="nav-link">
                  <FontAwesomeIcon icon={faCartShopping} className="me-2" /> Cart
                  {totalItem > 0 && (
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                      {totalItem}
                    </span>
                  )}
                </Link>
              </li>

              {/* Authentication Buttons */}
              {isAuthenicated ? (
                <li className="nav-item">
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(logout())}
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="btn btn-success">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

