import { useNavigate } from "react-router-dom";
// import "./MyCss.css"


function Footer() {

    const navigate=useNavigate();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5 onClick={()=>navigate("/aboutus")} className="clickme" >About Us </h5>
            <p className="text-white">
              We are committed to delivering the best service with top-quality products. 
              Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li onClick={()=>navigate("/home")  } className="clickme" >Home</li>
              <li onClick={()=>navigate("/aboutus")} className="clickme" >Aboutus</li>
              <li onClick={()=>navigate("/contactus") } className="clickme" >Contactus </li>
              <li onClick={()=>navigate("/cart")} className="clickme" >Cart</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-md-4 mb-3">
            <h5 onClick={()=>navigate("/contactus")} className="clickme" >Contact Us</h5>
            <p className="text-white mb-1"><strong>📍 Address:</strong>S.R.nagar ,amirpeta hyderbad</p>
            <p className="text-white mb-1"><strong>📞 Phone:</strong> +91 9705309118</p>
            <p className="text-white"><strong>✉ Email:</strong> jagannadhswmayjob@gmail.com</p>
          </div>
        </div>

        <hr className="border-light" />
        {/* Copyright */}
        <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
