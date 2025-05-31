import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Mac() {
    const cartmsg=()=>{
        alert("Item added")
     }
    const { addToCart } = useContext(CartContext);

    const mac = { 
        id:23, 
        img:"./newreleases/laptop.jpg" , 
        name:"Apple 2024 MacBook Air (13-inch, Apple M3 chip with 8‑core CPU and 8‑core GPU, 16GB Unified Memory, 256GB) - Space Gray",
        price:105990
    }
  return (
    
        <main>
            
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                    <li><Link to ="/Deals">Today's Deals</Link></li>                                    
                    <li><Link to ="/Contact">Contact</Link></li>
                    <li><nav><Link to ="/Loggedinpage">Home</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <Link to="/cart"><img src="cart.png" alt="Cart Icon" /> </Link> 
                </ul>
                <br>
                </br>
                
                <div className="description">
                    <div ><img src="./newreleases/laptop.jpg" alt='Laptop' className='image-item'></img> </div>
                    <div >
                    <h1>{mac.name}</h1>
                    <h1 className="price">₹{mac.price}</h1>
                    <h1>specifications:</h1><br/>
                    *Supercharged by M3 — The blazing-fast MacBook Air with the M3 chip is a super-portable laptop that sails through work and play.<br/><br/>
                    *LOOK SHARP, SOUND GREAT — Everything looks and sounds amazing with a 1080p FaceTime HD camera, 
                    three mics and four speakers with Spatial Audio. <br/><br/>
                    *APPS FLY WITH APPLE SILICON — All your favourites, from Microsoft 365 to Adobe Creative Cloud, run lightning fast in macOS.
                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(mac); cartmsg()}} >Add to Cart</button>     
            </section>
        </main>
  );
}

export default Mac;

