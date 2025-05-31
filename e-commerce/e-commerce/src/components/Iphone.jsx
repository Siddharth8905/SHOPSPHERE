import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Iphone() {
    const cartmsg=()=>{
        alert("Item added")
     }
        const { addToCart } = useContext(CartContext);
    
    const iphone = {
         id:13, 
         img:"./electronics/iphone.webp" , 
         name:"iPhone 16 Pro 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. ",
         price:122900
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
                    <div ><img src='./electronics/iphone.webp' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{iphone.name}</h1>
                    <h1 className="price">₹{iphone.price}</h1>
                    <h1>specifications:</h1><br/>
                    * STUNNING TITANIUM DESIGN — iPhone 16 Pro has a strong and light titanium design with a larger 15.93 cm (6.3″) Super Retina XDR display. 
                    It’s remarkably durable with the latest-generation Ceramic Shield material that’s 2x tougher than any smartphone glass.<br/><br/>
                    *BUILT FOR APPLE INTELLIGENCE — Apple Intelligence is the personal intelligence system that helps you write, express yourself and get things done effortlessly. 
                    With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple. <br/><br/>
                    *TAKE TOTAL CAMERA CONTROL — Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time.<br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(iphone); cartmsg()}} >Add to Cart</button>       
   
            </section>
        </main>
  );
}

export default Iphone;

