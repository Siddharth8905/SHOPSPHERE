import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Washing() {
    const { addToCart } = useContext(CartContext);
    const washing={ id:3, 
        img:"./appliances/washingmachine.jpg" ,
        name:"Bosch 8 kg 5 Star Fully-Automatic Front Loading Washing Machine",
        price:36490
        
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
                    <li><nav><Link to ="/Appliances">Back</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <Link to="/cart"><img src="cart.png" alt="Cart Icon" /> </Link> 
                </ul>
                <br>
                </br>
                
                <div className="description">
                    <div ><img src='./appliances/washingmachine.jpg' alt='washingMachine' className='image-item'></img> </div>
                    <div >
                    <h1>{washing.name}</h1>
                    <h1 className="price">₹{washing.price}</h1>
                    <h1>specifications:</h1><br/>
                    *Fully-automatic front load washing machine: Affordable with great wash quality, Easy to use<br/><br/>
                    * Capacity 8 kg: Suitable for large families
                     | Energy Rating: 5 Star - Best in class efficiency, ensuring reduced electricity consumption <br/><br/>
                    *Warranty : 2 Years warranty on Product, 12 Years warranty on Motor
                    1400 RPM : Higher spin speed helps in better water extraction from the clothes during the spin cycle, resulting in faster drying

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(washing)}>Add to Cart</button>     
            </section>
        </main>
  );
}

export default Washing;
