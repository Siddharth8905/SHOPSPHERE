import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Loggedinpage() {
  return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                <li><Link to ="/Deals">Today's Deals</Link></li>
                    <li><Link to ="/Newreleases">New Releases</Link></li>
                    <li><Link to ="/Contact">Contact</Link></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <Link to="/cart"><img src="cart.png" alt="Cart Icon" /> </Link>
                </ul>
                <br>
                </br>
                <p><h1><b>Categories:</b></h1></p>
                <div className="image-container">
                     <table>
                         <nav><Link to ="/Appliances"> <tr><img src='./home/appliances.png' alt='Appliances' className='image-item'></img></tr> </Link> </nav> 
                           <tr>Appliances</tr>                      
                        </table>
                        <table>
                        <nav><Link to ="/Fashion"><tr><img src='./home/fashion.webp' alt='Fashion' className='image-item'></img></tr></Link> </nav>
                           <tr>Fashion</tr>  
                        </table>
                        <table>
                        <nav><Link to ="/Beauty"> <tr><img src='./home/beauty.jpg' alt='Health&Hygiene' className='image-item'></img></tr></Link></nav>
                           <tr>Beauty&Hygiene</tr>  
                        </table>
                        <table>
                        <nav><Link to ="/Electronics"><tr><img src='./home/electronics.jpg' alt='Electronics' className='image-item'></img></tr></Link></nav>
                           <tr>Electronics</tr>  
                        
                     </table>
        </div>
            </section>
        </main>
  );
}

export default Loggedinpage;
