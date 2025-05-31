import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Jean() {
    const cartmsg=()=>{
        alert("Item added")
     }
    const { addToCart } = useContext(CartContext);
    
    const jean={ 
        id:8, 
        img:"./fashion/bluejean.jpg" ,
        name:"Symbol Men Cotton Rich Stretchable Jeans | Casual Denim Relaxed Fit",
        price:999
        
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
                    <div ><img src='./fashion/bluejean.jpg' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{jean.name}</h1>
                    <h1 className="price">₹{jean.price}</h1>
                    <h1>specifications:</h1><br/>
                    *Material type : Cotton Blend<br/><br/>
                    *Length : Ankle-length<br/><br/>
                    *Relaxed fit jeans which are easy through hip and thigh and straight from knee to ankle<br/><br/>
                    *Slant pocket with back welt pocket. Number of Pockets: 4<br/><br/>
                    *Due to the inherent nature of Indigo dyed fabrics color may rub off onto lighter surfaces, recommended to wash separately<br/><br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(jean); cartmsg()}} >Add to Cart</button>      
            </section>
        </main>
  );
}

export default Jean;
