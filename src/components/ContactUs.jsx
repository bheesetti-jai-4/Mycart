
// function ContactUs(){
//     return(
//         <>
//         <h1>welcome to contactus  page</h1>
//         </>
//     )
// }
// export default ContactUs;


// function ContactUs() {
//   return (
//     <div className="container mt-5">
//       <h1 className="text-center text-primary mb-4">Contact Us</h1>

//       {/* Contact Image */}
//       <div className="text-center">
//         <img 
//           src="/images/contactus.jpeg" 
//           alt="Contact Us" 
//           className="img-fluid rounded shadow-lg"
//           style={{ maxWidth: "600px" }}
//         />
//       </div>

//       {/* Contact Form */}
//       <div className="row justify-content-center mt-4">
//         <div className="col-md-6">
//           <form className="p-4 border rounded shadow">
//             <div className="mb-3">
//               <label className="form-label">Your Name</label>
//               <input type="text" className="form-control" placeholder="Enter your name" />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Your Email</label>
//               <input type="email" className="form-control" placeholder="Enter your email" />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Message</label>
//               <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;


// import React from "react";

function ContactUs() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Contact Us</h1>

      {/* Description */}
      <p className="text-center text-muted">
        Have questions or need assistance? We’re here to help! Feel free to reach out to us via phone, email, or visit our office. 
        Our team is always ready to assist you.
      </p>

      {/* Contact Details */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="p-4 border rounded shadow">
            <h4 className="text-secondary">Get in Touch</h4>
            <p><strong>📍 Address:</strong> 123, Main Street, Your City, Country</p>
            <p><strong>📞 Phone:</strong> +123 456 7890</p>
            <p><strong>✉ Email:</strong> support@example.com</p>
            <p><strong>🕒 Working Hours:</strong> Monday - Saturday: 9 AM - 6 PM</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <form className="p-4 border rounded shadow">
            <h4 className="text-secondary">Send Us a Message</h4>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
