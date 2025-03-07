import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Jacket() {
    const { addToCart } = useContext(CartContext);

    const jacket = { 
        id:21, 
        img:"./newreleases/jacket.jpg" , 
        name:"CHARMSHILP Genuine Leather Jacket for Men",
        price:6299
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
                    <div ><img src="./newreleases/jacket.jpg" alt='Jacket' className='image-item'></img> </div>
                    <div >
                    <h1>{jacket.name}</h1>
                    <h1 className="price">₹{jacket.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Material - Handcrafted from 100% genuine sheep leather with warm breathable fur lining .<br/><br/>
                    *Features- Snap tap flap over in front with zipper & ribbed cuffs and hem sleeves to keep warm.
                    Multiple pockets - 2 front pockets & deep interior pockets for wallet & phone . <br/><br/>
                    *Fit- Extra room through the chest and waist for a regular fit. Refer to the size chart for accurate measure.
                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(jacket)}>Add to Cart</button>     
            </section>
        </main>
  );
}

export default Jacket;

