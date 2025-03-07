import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Samsung() {
    const { addToCart } = useContext(CartContext);

    const samsung = { 
        id:14, 
        img:"./electronics/samsung.jpg" , 
        name:"Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Silverblue, 12GB RAM, 256GB Storage) ",
        price:129999 
    }
  return (
    
        <main>
            
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                    <li><Link to ="/Deals">Today's Deals</Link></li>
                     <li><Link to ="/Newreleases">New Releases</Link></li>
                    <li><Link to ="/Contact">Contact</Link></li>
                    <li><nav><Link to ="/Loggedinpage">Home</Link></nav></li>
                    <li><nav><Link to ="/Electronics">Back</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <Link to="/cart"><img src="cart.png" alt="Cart Icon" /> </Link> 
                </ul>
                <br>
                </br>
                
                <div className="description">
                    <div ><img src='./electronics/samsung.jpg' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{samsung.name}</h1>
                    <h1 className="price">₹{samsung.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Meet Galaxy S25 Ultra, your true AI companion. Powered by the next chapter of Galaxy AI with multi-modality, and the most advanced Galaxy fundamentals, Galaxy S25 Ultra naturally adapts to you: learning your patterns, anticipating your needs, and connecting your world seamlessly. 
                    With Now Brief, it also offers you personalized insights to get you through your day.<br/><br/>
                    *Live to create? Galaxy S25 Ultra’s cutting-edge camera and visual creation tools offer you the best camera and editing experience, 
                    thanks to its most advanced AI ProVisual Engine. Go from Wide to Tele and even Ultra Wide and get the sharpest details. <br/><br/>
                    *All this shielded in an Ultra-strong titanium frame with Galaxy’s toughest glass ever, Corning Gorilla Armor 2.<br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(samsung)}>Add to Cart</button>     
                    
            </section>
        </main>
  );
}

export default Samsung;

