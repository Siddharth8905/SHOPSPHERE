import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Fashion() {
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
                        <Link to ="/Shirt"><tr><img src='./fashion/greyshirt.jpg' alt='Grey-Shirt' className='image-item'></img></tr></Link>
                        <tr>Men's Regular Fit Shirt-Grey</tr>                      
                     </table>
                     <table>
                       <Link to= "/Denim"> <tr><img src='./fashion/denim.jpg' alt='Denim-Shirt' className='image-item'></img></tr></Link>
                        <tr>Men's Denim Casual Shirt</tr>  
                     </table>
                     <table>
                        <Link to ="/Blackpant"><tr><img src='./fashion/blackpant.jpg' alt='Black-Pant' className='image-item'></img></tr></Link>
                        <tr>Men's Stretchable Formal Pants </tr>  
                     </table>
                     <table>
                        <Link to = "/Jean"><tr><img src='./fashion/bluejean.jpg' alt='Blue-Jean' className='image-item'></img></tr></Link> 
                        <tr>Men's Slim Fit Cotton Rich Stretchable Jeans</tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Fashion;
