import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Facegel() {
    const { addToCart } = useContext(CartContext);

    const facegel = { 
        id:19, 
        img:"./deals/sun.jpg" , 
        name:"Deconstruct Face Gel Sunscreen SPF 50 + and PA+++ ",
        price:321
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
                    <div ><img src='./deals/sun.jpg' alt='Facegel' className='image-item'></img> </div>
                    <div >
                    <h1>{facegel.name}</h1>
                    <h1 className="price">₹{facegel.price}</h1>
                    <h1>specifications:</h1><br/>
                    * NO WHITE CAST : This SPF 50 + sunscreen with very lightweight texture absorbs 
                    quickly into the skin leaving no white cast and lasts upto 8 hours<br/><br/>
                    *PROTECTS SKIN FROM SUN DAMAGE : Unique formulation of Benzophenone-3, Butyl Methoxydibenzoylmethane and 
                    Ethylhexyl methoxycinnamate provides overall protection and prevents sun related skin ageing. <br/><br/>
                    *SPF 50 + BEST SUNSCREEN : The lightweight Gel contains UV filters that absorbs them and protects the skin from harmful radiations.
                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(facegel)}>Add to Cart</button>     
            </section>
        </main>
  );
}

export default Facegel;

