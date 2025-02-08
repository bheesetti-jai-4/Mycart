

function AboutUs() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="text-primary fw-bold">About Us</h1>
        <p className="lead text-muted">
          Welcome to our website! We are dedicated to providing high-quality products and exceptional service.
        </p>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <img 
            src="/images/aboutus.jpg" 
            alt="About Us" 
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-success">Our Mission</h3>
          <p>
            Our mission is to deliver the best quality items at affordable prices. We prioritize customer satisfaction and aim to build a trusted community.
          </p>

          <h3 className="text-success">Why Choose Us?</h3>
          <ul className="list-group">
            <li className="list-group-item">✔ High-Quality Products</li>
            <li className="list-group-item">✔ Affordable Pricing</li>
            <li className="list-group-item">✔ 24/7 Customer Support</li>
            <li className="list-group-item">✔ Fast & Reliable Delivery</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
