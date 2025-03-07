import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Deals() {
  return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                    <li><Link to ="/Newreleases">New Releases</Link></li>
                    
                    <li><Link to ="/Contact">Contact</Link></li>
                    <li><nav><Link to ="/Loggedinpage">Home</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <li><Link to ="/Login"><img src="shopping.png"/></Link></li>
                </ul>
                <br>
                </br>
                <p><h1><b>Deals:</b></h1></p>
                <div className="image-container">
                    <table>
                       <Link to ="/Tws"><tr><img src='./deals/buds.jpg' alt='Ear-Buds' className='image-item'></img></tr> </Link>
                        <tr>TWS Ear Buds Wireless Earphones with mic</tr>                      
                     </table>
                     <table>
                     <Link to ="/Oven"><tr><img src='./deals/oven.jpg' alt='Microwave Oven' className='image-item'></img></tr></Link>
                        <tr>LG 28 L Convection Microwave Oven</tr>  
                     </table>
                     <table>
                     <Link to ="/Facegel"><tr><img src='./deals/sun.jpg' alt='Sunscreen' className='image-item'></img></tr></Link>
                        <tr>Deconstruct Face Gel Sunscreen SPF 50 +++</tr>  
                     </table>
                     <table>
                     <Link to ="/Tshirt"><tr><img src='./deals/tshirt.jpg' alt='T-shirt' className='image-item'></img></tr></Link>
                        <tr>Allen Solly Men's Solid Regular Fit Polo</tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Deals;
