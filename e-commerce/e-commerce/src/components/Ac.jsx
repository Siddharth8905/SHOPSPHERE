import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Ac() {
    const cartmsg=()=>{
        alert("Item added")
     }
     const { addToCart } = useContext(CartContext); 
     
     const ac={ 
        id:4, 
        img:"./appliances/ac.jpg" ,
        name:"Samsung 1.5 Ton 3 Star Windfree AI Inverter Smart Split AC",
        price:41490
        
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
                    <div ><img src='./appliances/ac.jpg' alt='Air Conditioner' className='image-item'></img> </div>
                    <div >
                    <h1>{ac.name}</h1>
                    <h1 className="price">₹{ac.price}</h1>
                    <h1>specifications:</h1><br/>
                    *Samsung WindFree Air Conditioners powered with Bespoke AI: Smart and powerful ACs with Wi-Fi and Voice control offering 30% additional Energy Savings with AI Energy Mode. Get Comfortable cooling with WindFree Technology<br/><br/>
                    * Key Features: BESPOKE AI WindFree, 30% Additional Energy Savings, 5 Step Convertible, 4 Way Swing, Wi-Fi, Voice Control with Alexa, Google & Bixby, SmartThings app, Auto Error Diagnosis, 3 Step Auto Clean, Digital Inverter Technology, Wearable Good Sleep mode, Durafin Ultra, Triple Protection Plus, Copper Anti-Bacterial Filter, Coated Copper tubes <br/><br/>
                    *Special Features: WindFree, AI Fast and Comfort Cooling, Artifical Intelligence (AI) Energy Savings, Cools even at 58 degrees C, Low noise, Connected living- supports Internet of Things (IoT)

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(ac); cartmsg()}}>Add to Cart</button>    
            </section>
        </main>
  );
}

export default Ac;
