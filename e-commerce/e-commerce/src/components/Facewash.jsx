import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Facewash() {
    const cartmsg=()=>{
        alert("Item added")
     }
     const { addToCart } = useContext(CartContext);

    const facewash={ id:11, 
        img:"./beauty/facewash.jpg" ,
        name:"Sulphate-Free Gentle Skin Hydrating Face Wash",
        price:685 }
  return (
    
        <main>
            
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                    <li><Link to ="/Deals">Today's Deals</Link></li>
                     <li><Link to ="/Newreleases">New Releases</Link></li>
                    <li><Link to ="/Contact">Contact</Link></li>
                    <li><nav><Link to ="/Loggedinpage">Home</Link></nav></li>
                    <li><nav><Link to ="/Beauty">Back</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <Link to="/cart"><img src="cart.png" alt="Cart Icon" /> </Link> 
                </ul>
                <br>
                </br>
                
                <div className="description">
                    <div ><img src='./beauty/facewash.jpg' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{facewash.name}</h1>
                    <h1 className="price">₹{facewash.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Quantity: 250ml; Item Form: Lotion; Skin Type: Dry, Sensitive; Soothing, 
                    non-irritating cleanser ideal for face, hands, body; Helps Skin retain its moisture. Skin friendly pH balanced.    <br/><br/>
                    * Can be used with or without water. Fragrance-free. Dermatologist recommended. <br/><br/>
                    *Usage: Apply daily to dry skin as needed. Does not strip the skin off its natural oils. Gentle and mild, it is ideal for daily use. 
                    INGREDIENTS WATER, GLYCERIN, CETEARYL ALCOHOL, PANTHENOL, NIACINAMIDE, PANTOLACTONE, XANTHAN GUM, SODIUM COCOYL ISETHIONATE, SODIUM BENZOATE, CITRIC ACID

                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(facewash); cartmsg()}}  >Add to Cart</button>       
    
            </section>
        </main>
  );
}

export default Facewash;
