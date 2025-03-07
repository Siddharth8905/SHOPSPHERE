import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Newreleasesbl() {
  return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                <li><Link to ="/Deals">Today's Deals</Link></li>
                    
                    <li><Link to ="/Contact">Contact</Link></li>
                    <li><nav><Link to ="/Loggedinpage">Home</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <img src="shopping.png"/>
                </ul>
                <br>
                </br>
                <p><h1><b>New Releases :</b></h1></p>
                <div className="image-container">
                    <table>
                      <Link to ="/Jacket"> <tr><img src='./newreleases/jacket.jpg' alt='Leather-Jacket' className='image-item'></img></tr></Link>
                        <tr>Genuine Leather Jacket for Men</tr>                      
                     </table>
                     <table>
                     <Link to ="/Shampoo"><tr><img src='./newreleases/shampoo.jpg' alt='Shampoo' className='image-item'></img></tr></Link>
                        <tr>Bond Repair Shampoo For Damaged, Dry & Frizzy Hair</tr>  
                     </table>
                     <table>
                     <Link to ="/Mac"><tr><img src='./newreleases/laptop.jpg' alt='Laptop' className='image-item'></img></tr></Link>
                        <tr>MacBook Air 13″ Laptop with M3 chip </tr>  
                     </table>
                     <table>
                     <Link to ="/Ironbox"><tr><img src='./newreleases/iron.jpg' alt='IronBox' className='image-item'></img></tr></Link>
                        <tr>PHILIPS Steam Iron 2200 Watts</tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Newreleasesbl;
