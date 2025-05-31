import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function IronBox() {
    const cartmsg=()=>{
        alert("Item added")
     }
    const { addToCart } = useContext(CartContext);

    const iron = { 
        id:23, 
        img:"./newreleases/iron.jpg" , 
        name:"PHILIPS Plastic Perfect Care Power Life Steam Iron Gc3925/34,2200 Watts Up To 45 G/Min Steam Output",
        price:7149
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
                    <div ><img src="./newreleases/iron.jpg" alt='Laptop' className='image-item'></img> </div>
                    <div >
                    <h1>{iron.name}</h1>
                    <h1 className="price">₹{iron.price}</h1>
                    <h1>specifications:</h1><br/>
                    *NO BURNS GUARANTEED: Thanks to OptimalTemp technology, this iron will never cause burns to any ironable fabric – no burns, no shine – guaranteed.<br/><br/>
                    *STEAMGLIDE PLUS SOLEPLATE: Our exclusive SteamGlide Plus soleplate, with its advanced titanium layer and a 6-layer coating, delivers ultimate gliding performance 
                    over any fabric. Non-stick, scratch resistant and easy to keep clean.<br/><br/>
                    *POWER: 2200 watts power for delivering a fast heat-up and powerful performance.
                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(iron); cartmsg()}} >Add to Cart</button>     
            </section>
        </main>
  );
}

export default IronBox;

