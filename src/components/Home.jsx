// import { useNavigate } from "react-router-dom";

// function Home(){

//     const navigate = useNavigate()

//     return(
//         <>
//         <h1>welcome to home page</h1>
//         <div>
//             <img src="/images/vegtabels.jpeg" alt="vegitems" />
//             <button onClick={()=>navigate("/veg")} >visit</button>
//         </div>
//         <div>
//             <img src="/images/nonvegitems.jpeg" alt="nonvegitems" />
//             <button onClick={()=>navigate("/nonveg")} >visit</button>
//         </div>
        
//         </>
//     )
// }
// export default Home;

import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="text-primary fw-bold mb-4">Welcome to Home Page</h1>
      
      <div className="row justify-content-center">
        {/* Veg Section */}
        <div className="col-md-5 m-2 p-3 border rounded shadow-sm">
          <img 
            src="/images/vegtabels.jpeg" 
            alt="vegitems" 
            className="img-fluid rounded"
            style={{ maxHeight: "200px" }}
          />
          <button 
            className="btn btn-success mt-3 w-100"
            onClick={() => navigate("/veg")}
          >
            Visit Veg Section
          </button>
        </div>

        {/* Non-Veg Section */}
        <div className="col-md-5 m-2 p-3 border rounded shadow-sm">
          <img 
            src="/images/nonvegitems.jpeg" 
            alt="nonvegitems" 
            className="img-fluid rounded"
            style={{ maxHeight: "200px" }}
          />
          <button 
            className="btn btn-danger mt-3 w-100"
            onClick={() => navigate("/nonveg")}
          >
            Visit Non-Veg Section
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
