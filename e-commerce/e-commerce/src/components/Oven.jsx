import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

function Oven() {
    const cartmsg=()=>{
        alert("Item added")
     }
    const { addToCart } = useContext(CartContext);

    const oven = { 
        id:18, 
        img:"./deals/oven.jpg" , 
        name:"LG 28 L Convection Microwave Combination OvenOven (MC2846BV)",
        price:13490
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
                    <div ><img src='./deals/oven.jpg' alt='Oven' className='image-item'></img> </div>
                    <div >
                    <h1>{oven.name}</h1>
                    <h1 className="price">₹{oven.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Convection Microwave Oven: For baking along with grilling, reheating, 
                    defrosting and cooking (Maximum temperature)<br/><br/>
                    *251 of Auto Cook Menus and Recipes - Soup; Continental; Salad; Tandoor Se; Indian Cuisine; Sweet Corner; Rice Delight; 
                    Chatpat Corner and many more Health plus recipes <br/><br/>
                    *Energy Consumption: Grill Power Consumption - 1200 W | Convection Power Consumption - 1950 W | Microwave Power Levels - 5.
                    <br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => {addToCart(oven); cartmsg()}}  >Add to Cart</button>     
            </section>
        </main>
  );
}

export default Oven;

