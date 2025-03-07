import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Electronics() {
  return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
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
                    <Link to ="/Iphone"><tr><img src='./electronics/iphone.webp' alt='I-Phone' className='image-item'></img></tr></Link> 
                        <tr>IPhone 16 Pro 256 GB</tr>                      
                     </table>
                     <table>
                     <Link to ="/Samsung"><tr><img src='./electronics/samsung.jpg' alt='S25 Ultra' className='image-item'></img></tr></Link>
                        <tr>Samsung Galaxy S25 Ultra 5G </tr>  
                     </table>
                     <table>
                     <Link to ="/Oneplus"><tr><img src='./electronics/oneplus.webp' alt='Oneplus 13' className='image-item'></img></tr></Link>
                        <tr>OnePlus 13 | Smarter with OnePlus AI </tr>  
                     </table>
                     <table>
                     <Link to ="/Vivo"><tr><img src='./electronics/vivo.jpg' alt='Vivo X200' className='image-item'></img></tr></Link>
                        <tr>Vivo X200 5G  </tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Electronics;
