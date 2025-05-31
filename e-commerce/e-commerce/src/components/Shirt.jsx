import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Shirt() {
    const cartmsg=()=>{
        alert("Item added")
     }
    const { addToCart } = useContext(CartContext); 

    const shirt={ 
        id:5, 
        img:"./fashion/greyshirt.jpg" ,
        name:"Symbol Men's Solid 100% Cotton Half Sleeve Regular Fit Formal Shirt",
        price:529
        
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
                    <div ><img src='./fashion/greyshirt.jpg' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{shirt.name}</h1>
                    <h1 className="price">₹{shirt.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Material : Cott Poly blend<br/><br/>
                    *Solid color Formal shirt<br/><br/>
                    *Short sleeve shirt with single chest pocket<br/><br/>
                    *Pair it with a pair of formal trousers and formal shoes for a smart work look<br/><br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(shirt); cartmsg()}} >Add to Cart</button>    
            </section>
        </main>
  );
}

export default Shirt;
