import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Shampoo() {
    const { addToCart } = useContext(CartContext);

    const shampoo = { 
        id:22, 
        img:"./newreleases/shampoo.jpg" , 
        name:"Minimalist Bond Repair Shampoo For Damaged, Dry & Frizzy Hair, Maleic Bond Repair Complex 3.5% With Patented Technology",
        price:569
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
                    <div ><img src="./newreleases/shampoo.jpg" alt='Shampoo' className='image-item'></img> </div>
                    <div >
                    <h1>{shampoo.name}</h1>
                    <h1 className="price">₹{shampoo.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Contains 16 essential amino acids for improving hair strength, density & moisture .<br/><br/>
                    *Combined with Ceramides, which is a known ingredient for barrier repair in skin, helps maintain integrity & structure of hair . <br/><br/>
                    *How to Use: Use in AM. Take sufficient amount and apply on wet hair. Massage your hair gently. Rinse thoroughly.
                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(shampoo)}>Add to Cart</button>     
            </section>
        </main>
  );
}

export default Shampoo;

