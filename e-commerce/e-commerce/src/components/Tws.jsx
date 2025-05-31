import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Tws() {
    const cartmsg=()=>{
        alert("Item added")
     }
    const { addToCart } = useContext(CartContext);

    const tws = { 
        id:17, 
        img:"./deals/buds.jpg" , 
        name:"boAt Airdopes 141, Low Latency, ENx Tech, 42HRS Battery, Fast Charge, IWP, IPX4, v5.1 Bluetooth Earbuds",
        price:1098
    }
  return (
    
        <main>
            
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                    <li><Link to ="/Newreleases">New Releases</Link></li>                                       
                    <li><Link to ="/Contact">Contact</Link></li>
                    <li><nav><Link to ="/Loggedinpage">Home</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <Link to="/cart"><img src="cart.png" alt="Cart Icon" /> </Link> 
                </ul>
                <br>
                </br>
                
                <div className="description">
                    <div ><img src='./deals/buds.jpg' alt='Tws' className='image-item'></img> </div>
                    <div >
                    <h1>{tws.name}</h1>
                    <h1 className="price">₹{tws.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Playback- Enjoy an extended break on weekends with your favourite episodes on stream, 
                    virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.<br/><br/>
                    *Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. 
                    These tws earbuds are your companion for a perfect gaming experience. <br/><br/>
                    *Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that 
                    ensures a smooth delivery of your voice via voice calls.
                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(tws); cartmsg()}}>Add to Cart</button>     
            </section>
        </main>
  );
}

export default Tws;

