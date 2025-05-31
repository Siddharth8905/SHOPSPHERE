import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Tshirt() {
    const cartmsg=()=>{
        alert("Item added")
     }
    const { addToCart } = useContext(CartContext);

    const tshirt = { 
        id:20, 
        img:"./deals/tshirt.jpg" , 
        name:"Allen Solly Men's Solid Regular Fit Polo",
        price:599
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
                    <div ><img src='./deals/tshirt.jpg' alt='Tshirt' className='image-item'></img> </div>
                    <div >
                    <h1>{tshirt.name}</h1>
                    <h1 className="price">₹{tshirt.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Sleeve Type: Half Sleeve; Closure Type: Button; Material Composition: 60% Cotton, 
                    40% Polyester; Collar Style: Band Collar.<br/><br/>
                    *Neck : Polo Neck; Pattern : Solid . <br/><br/>
                    *Occasion : Casual
                    Fit : Regular Fit.
                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(tshirt); cartmsg()}}  >Add to Cart</button>     
            </section>
        </main>
  );
}

export default Tshirt;

