import '../styles/Contact.css';
import { Link } from "react-router-dom";

function Contact(){
    return(
        
    <main>
    <header><h2>SHOPSPHERE</h2></header>
    <div className="contain">
      <div className="background-image"></div>
      <div className="form-container">
        <h2 className="title">Contact Us</h2>
        <form className="form">
          <table className="form-table">
            <tbody>
              <tr>
                <td><label className="label">Name</label></td>
                <td>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your Name"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td><label className="label">Email</label></td>
                <td>
                  <input
                    type="email"
                    className="input"
                    placeholder="Your Email"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td><label className="label">Message</label></td>
                <td>
                  <textarea
                    className="textarea"
                    placeholder="Your Message"
                    rows="4"
                    required
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="btn">Send Message</button>
        </form>
        
      </div>
      <nav><Link to ="/Loggedinpage"><button type="submit" className="btn">Home</button></Link></nav>
    </div>

  </main>
  );
};
export default Contact;