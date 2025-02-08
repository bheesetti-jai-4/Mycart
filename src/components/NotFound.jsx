// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";



// function NotFound() {

//   const navigate = useNavigate();
//     useEffect(()=>{       /* this is auto run in react after 5 seconds to navigate to home page*/
//       setTimeout(() => {
//         navigate("/home")
//       }, 5000);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[])
    
//   return (
//     <>
//     <h1>Not found above link </h1>
//     {/* <img src={"/notfound2.jpg"} alt="notfound2" width="200"  /> */}
//     <img src="/images/notfound1.jpg" alt="notfound1" width={300} />
//     {/* <img src={"notfound2.jpg"} alt="not found " width={400} /> */}
//     {/* <img src={"/images/notfound1.jpg"} alt="not found" width={100} /> */}




//     </>
//   )
// }
// export default NotFound;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
  const navigate = useNavigate();
  const [time, setTime] = useState(5); // Initial countdown value

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/home"); // Navigate after countdown ends
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup when component unmounts
  }, [navigate]);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="text-danger fw-bold">404 - Page Not Found</h1>
      <p className="text-muted">
        Redirecting to Home in <span className="fw-bold">{time}</span> seconds...
      </p>
      <img
        src="/notfound/404.jpeg"
        alt="not found"
        className="img-fluid"
        style={{ maxWidth: "500px" }}
      />
    </div>
  );
}

export default NotFound;
