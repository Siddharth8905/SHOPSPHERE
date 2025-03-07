import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';


function Denim() {
    const { addToCart } = useContext(CartContext);
    const denim={ id:6, img:"./fashion/denim.jpg" ,name:"Men Denim Full Sleeves Regular Fit Casual Shirt",price:1499
        
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
                    <li><nav><Link to ="/Fashion">Back</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <Link to="/cart"><img src="cart.png" alt="Cart Icon" /> </Link>                
                    </ul>
                <br>
                </br>
                
                <div className="description">
                    <div ><img src='./fashion/denim.jpg' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{denim.name}</h1>
                    <h1 className="price">₹{denim.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Fabric: Denim Cotton<br/><br/>
                    *Pattern: Solid<br/><br/>
                    *Casual Shirt & Party Wear<br/><br/>
                    *Sleeves Style: Full<br/><br/>
                    *Wash As Per Brand Tag<br/><br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(denim)}>Add to Cart</button>    
            </section>
        </main>
  );
}

export default Denim;
