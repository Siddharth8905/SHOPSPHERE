import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Appliances() {
  return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul className='sample'>
                    <li><Link to ="/Deals">Today's Deals</Link></li>
                   <li><Link to ="/Newreleases">New Releases</Link></li>
                   <li><Link to ="/Contact">Contact</Link></li>
                    <li><nav><Link to ="/Loggedinpage">Home</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <img src="cart.png"/>
                </ul>
                <br>
                </br>
                <p><h1><b>Items:</b></h1></p>
                <div className="image-container">
                    <table>
                       <nav><Link to ="/Tv"> <tr><img src='./appliances/tv.jpg' alt='TV' className='image-item'></img></tr> </Link> </nav> 
                        <tr>Samsung 43 inches LED TV</tr>                      
                     </table>
                     <table>
                        <Link to="/Fridge"><tr><img src='./appliances/fridge.jpg' alt='Fridge' className='image-item'></img></tr> </Link>
                        <tr>Bosch 243L Refrigerator</tr> 
                     </table>
                     <table>
                        <Link to="/Washing"><tr><img src='./appliances/washingmachine.jpg' alt='Washing machine' className='image-item'></img></tr></Link>
                        <tr>Bosch 8kg Washing Machine</tr>  
                     </table>
                     <table>
                     <Link to="/Ac"><tr><img src='./appliances/ac.jpg' alt='Air Conditioner' className='image-item'></img></tr></Link>
                        <tr>Samsung 1.5 Ton 5 Star AI Inverter Smart Split AC </tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Appliances;
