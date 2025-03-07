import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';  
import '../styles/Description.css';

function Tv() {
    const { addToCart } = useContext(CartContext); 

    const tv = {
        id: 1,
        img: "./appliances/tv.jpg",
        name: "Samsung 108 cm (43 inches) 4K Ultra HD Smart LED TV UA43DUE70BKLXL (Black)",
        price: 35990
    };

    return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                    <li><Link to="/Deals">Today's Deals</Link></li>
                    <li><Link to="/Newreleases">New Releases</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Loggedinpage">Home</Link></li>
                    <li><Link to="/Appliances">Back</Link></li>
                    <li><Link to="/Homepage">Logout</Link></li>
                    <li>
                        <Link to="/cart">
                            <img src="cart.png" alt="Cart Icon" />
                        </Link>
                    </li>
                </ul>
                <br />

                <div className="description">
                    <div><img src="./appliances/tv.jpg" alt="TV" className="image-item" /></div>
                    <div>
                        <h1>{tv.name}</h1>
                        <h1 className="price">₹{tv.price}</h1>
                        <h1>Specifications:</h1>
                        <p>* Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 50 Hertz</p>
                        <p>* Connectivity: 3 HDMI, 2 USB, Wi-Fi, Bluetooth, LAN, Optical Audio Out</p>
                        <p>* Display: Dynamic Crystal Color, HDR 10+, 4K Upscaling, UHD Dimming</p>
                    </div>
                </div>
                <button type="button" className="cart-btn" onClick={() => addToCart(tv)}>Add to Cart</button>
            </section>
        </main>
    );
}

export default Tv;
