import '../styles/Description.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';


function Vivo() {
    const { addToCart } = useContext(CartContext);

    const vivo = { 
        id:14, 
        img:"./electronics/vivo.jpg" , 
        name:"Vivo X200 5G (Natural Green, 16GB RAM, 512GB Storage) ",
        price:71999 
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
                    <li><nav><Link to ="/Electronics">Back</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <Link to="/cart"><img src="cart.png" alt="Cart Icon" /> </Link> 
                </ul>
                <br>
                </br>
                
                <div className="description">
                    <div ><img src='./electronics/vivo.jpg' alt='TV' className='image-item'></img> </div>
                    <div >
                    <h1>{vivo.name}</h1>
                    <h1 className="price">₹{vivo.price}</h1>
                    <h1>specifications:</h1><br/>
                    * Processor: Dimensity 9400 Flagship SoC Platform | All big core CPU, ArmV9 architecture, higher IPC performance | 
                    Eighth-generation AI processor 890, 60 TOPS ultra-high computing power <br/><br/>
                    *Camera: Main camera - 50 MP | IMX921 | 1/1.56" | f/1.57 | 23 mm equivalent focal distance | CIPA 4.5 vivo vcs Camera-Bionic Spectrum 2.0 | Telephoto Camera - 50 MP | IMX882 | 1/2" | f/2.57 | 70 mm equivalent focal distance |
                     OIS 3x optical zoom | 100x digital zoom | 15 cm macro | Ultra Wide Camera - 50 MP | JN1 | 1/2.76" | 15 mm equivalent focal distance | Super Hard AR Coating on camera outer surface <br/><br/>
                    *Display Screen: 16.94 cm (6.67" inch) Xensation α + AMOLED display | 
                    DC-like dimming (DC-like for high brightness, high-frequency PWM for low brightness) | 460 PPI | 100% DCI-P3 wide color gamut | 4500 nits local peak brightness<br/>

                                
                        </div>                  
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(vivo)}>Add to Cart</button>     
                    
            </section>
        </main>
  );
}

export default Vivo;

