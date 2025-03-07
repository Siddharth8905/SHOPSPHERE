import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

function Homepage() {
  return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                <li><Link to ="/Dealsbl">Today's Deals</Link></li>
                    <li><Link to ="/Newreleasesbl">New Releases</Link></li>
                    <li><Link to ="/Login">Contact</Link></li>
                    <li><Link to ="/Login">Login</Link></li>
                </ul>
                <br>
                </br>
                <p><h1><b>Categories:</b></h1></p>
                <div className="image-container">
                     <table>
                       <nav><Link to ="/Appliancesbl"> <tr><img src='./home/appliances.png' alt='Appliances' className='image-item'></img></tr> </Link> </nav> 
                        <tr>Appliances</tr>                      
                     </table>
                     <table>
                     <nav><Link to ="/Fashionbl"><tr><img src='./home/fashion.webp' alt='Fashion' className='image-item'></img></tr></Link> </nav>
                        <tr>Fashion</tr>  
                     </table>
                     <table>
                     <nav><Link to ="/Beautybl"> <tr><img src='./home/beauty.jpg' alt='Health&Hygiene' className='image-item'></img></tr></Link></nav>
                        <tr>Beauty&Hygiene</tr>  
                     </table>
                     <table>
                     <nav><Link to ="/Electronicsbl"><tr><img src='./home/electronics.jpg' alt='Electronics' className='image-item'></img></tr></Link></nav>
                        <tr>Electronics</tr>  
                     </table>
        </div>
            </section>
        </main>
  );
}

export default Homepage;
