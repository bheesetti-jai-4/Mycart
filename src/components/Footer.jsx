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
              <li><a href="/home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/aboutus" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contactus" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Cart</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-md-4 mb-3">
            <h5 onClick={()=>navigate("/contactus")} className="clickme" >Contact Us</h5>
            <p className="text-white mb-1"><strong>📍 Address:</strong> 123 Main Street, Your City</p>
            <p className="text-white mb-1"><strong>📞 Phone:</strong> +123 456 7890</p>
            <p className="text-white"><strong>✉ Email:</strong> support@example.com</p>
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
