import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Blackpant() {
    const { addToCart } = useContext(CartContext);
    
    const pant={ 
        id:7, 
        img:"./fashion/blackpant.jpg" ,
        name:"Symbol Men's Stretchable Formal Pants | Trousers (Slim Fit)",
        price:1199
        
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
                    <li><nav><Link to ="/Fashion">Back</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <Link to="/cart"><img src="cart.png" alt="Cart Icon" /> </Link>
                </ul>
                <br>
                </br>
                
                <div className="description">
                    <div ><img src='./fashion/blackpant.jpg' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{pant.name}</h1>
                    <h1 className="price">₹{pant.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Fabric: Polyester Blend<br/><br/>
                    *Length : Ankle-length<br/><br/>
                    *Stretch Poly Viscose belnd for all day comfort<br/><br/>
                    *Slant pocket with back welt pocket. Number of Pockets: 4<br/><br/>
                    *Button closure with zip fly<br/><br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(pant)}>Add to Cart</button>      
            </section>
        </main>
  );
}

export default Blackpant;
