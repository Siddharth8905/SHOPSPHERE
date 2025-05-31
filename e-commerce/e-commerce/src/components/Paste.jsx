import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Paste() {
    const cartmsg=()=>{
        alert("Item added")
     }
     const { addToCart } = useContext(CartContext);
    
    const paste={ id:10, img:"./beauty/paste.jpg" ,name:"Colgate Visible White Purple Toothpaste For Teeth Whitening",price:172 }
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
                    <div ><img src='./beauty/paste.jpg' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{paste.name}</h1>
                    <h1 className="price">₹{paste.price}</h1>
                    <h1>specifications:</h1><br/>
                    * HELLO SHINE, HELLO PURPLE: Introducing Colgate Visible White Purple Toothpaste, 
                    Colgate's first Purple Toothpaste for teeth whitening!<br/><br/>
                    * REMOVES SURFACE STAINS: This teeth whitening toothpaste is infused with micropolishing crystals 
                    that help in gently removing surface stains for a shine that lasts . <br/><br/>
                    *MULTI-BENEFIT TOOTHPASTE: Visible White Purple Toothpaste also helps fight cavities and removes plaque build-up. Its sparkling minty flavour gives you fresher breath with a white smile!
                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(paste); cartmsg()}}  >Add to Cart</button>       
    
            </section>
        </main>
  );
}

export default Paste;
