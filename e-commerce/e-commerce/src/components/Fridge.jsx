import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Fridge() {
    const cartmsg=()=>{
        alert("Item added")
     }
        const { addToCart } = useContext(CartContext); 
    
    const fridge={ id:2, 
        img:"./appliances/fridge.jpg" ,
        name:"Bosch 243L 3star (2023) Frost free Refrigerator Appliance CTC27S031I (Convertible,Silver Inox)",
        price:31990
        
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
                    <div ><img src='./appliances/fridge.jpg' alt='Fridge' className='image-item'></img> </div>
                    <div >
                    <h1>{fridge.name}</h1>
                        <h1 className="price">₹{fridge.price}</h1>
                    <h1>specifications:</h1><br/>
                    *Bosch premium glossy exterior with smart Digital display 243 litres Freezer-on-Top refrigirator<br/><br/>
                    * VitaFresh with humidity control crisper Box for long lasting freshness|Convertible with XL capacity | Adjustable Shelves <br/><br/>
                    *Inverter Compressor, CoolExtend-retains cooling up to 18 hrs even after power cut FreshSense lets the refrigerator automatically adapts/changes the temperature so that your ice cream will be perfect for a bite, Get upto 40% energy savings.

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(fridge); cartmsg()}}>Add to Cart</button>    
            </section>
        </main>
  );
}

export default Fridge;
