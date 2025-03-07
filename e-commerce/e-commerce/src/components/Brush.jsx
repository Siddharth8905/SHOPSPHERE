import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';


function Brush() {
    const { addToCart } = useContext(CartContext);
    const brush={ 
        id:9, 
        img:"./beauty/brush.jpg" ,
        name:"Colgate Toothbrush  set of 2",
        price:159 }
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
                    <div ><img src='./beauty/brush.jpg' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{brush.name}</h1>
                    <h1 className="price">₹{brush.price}</h1>
                    <h1>specifications:</h1><br/>
                    * GENTLE BRUSHING: Experience a unique brushing sensation with the specially designed Colgate toothbrush 
                    with spiral bristles that help whiten teeth<br/><br/>
                    * ULTRA-SOFT BRISTLES: This Colgate toothbrush takes softness to the next level with 137% more ultra-soft slimmer tip bristles, 
                    which are gentle on your enamel teeth and gums. <br/><br/>
                    *EASY TO HOLD: Colgate Visible White O2 Toothbrush is designed to be comfortable. The ergonomic grip is made for an effortless brushing experience<br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(brush)}>Add to Cart</button>       
            </section>
        </main>
  );
}

export default Brush;
