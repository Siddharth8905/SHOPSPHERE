import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Oneplus() {
    const cartmsg=()=>{
        alert("Item added")
     }
    const { addToCart } = useContext(CartContext);

    const oneplus = { 
        id:15, 
        img:"./electronics/oneplus.webp" , 
        name:"OnePlus 13 | Smarter with OnePlus AI (12GB RAM, 256GB Storage Arctic Dawn)",
        price:69998 
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
                    <div ><img src='./electronics/oneplus.webp' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{oneplus.name}</h1>
                    <h1 className="price">₹{oneplus.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Flagship power made smarter with Qualcomm Snapdragon 8 Elite Mobile Platform – the heart that powers the mind of OnePlus AI.
                     With a faster Neural Engine, an improved CPU and GPU, and a big jump in memory bandwidth.<br/><br/>
                    *OxygenOS 15 - Experience the power of all-new OnePlus AI. Search smarter, 
                    crank up your creativity, and power your productivity for a smoother digital life. <br/><br/>
                    *5th-Gen Hasselblad Camera for Mobile combines a flagship 50MP triple camera system – Wide 50MP Sony's LYT-808 with OIS, 
                    3X Triprism Telephoto 50MP and an Ultra-wide 50MP (120° Fov, 1/2.75" sensor size) sensor.
                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(oneplus); cartmsg()}}>Add to Cart</button>     
            </section>
        </main>
  );
}

export default Oneplus;

