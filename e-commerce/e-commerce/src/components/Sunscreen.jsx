import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Sunscreen() {
    const { addToCart } = useContext(CartContext);
    const sunscreen={ 
        id:12, 
        img:"./beauty/sunscreen.jpg" ,
        name:"Minimalist Sunscreen SPF 50 PA++++",
        price:399 }
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
                    <div ><img src='./beauty/sunscreen.jpg' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{sunscreen.name}</h1>
                    <h1 className="price">₹{sunscreen.price}</h1>
                    <h1>specifications:</h1><br/>
                    * This sunscreen is formulated with 4 very effective UV-filters, namely, Uvinul T 150, Avobenzone, Octocrylene and Titanium Dioxide to provide protection from UVA & UVB
                    <br/><br/>
                    *Boosted with Vitamin A, B3, B5, E and F that not only repairs skin after sun exposure, but also soothes, nourishes and hydrates skin <br/><br/>
                    *Spreads easily like a lightweight moisturiser and does not leave behind unwanted residue or heavy feeling<br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(sunscreen)}>Add to Cart</button>       
  
            </section>
        </main>
  );
}

export default Sunscreen;
