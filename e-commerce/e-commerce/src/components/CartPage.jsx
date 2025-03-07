import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <main>
            <div>
                <header><h2>SHOPSPHERE</h2></header>
                <h1>Your Cart :</h1>
                {cart.length === 0 ? (
                    <h2>Your cart is empty!</h2>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.img} alt={item.name} width="100" />
                            <h3>{item.name}</h3>
                            <h3>₹{item.price}</h3>
                            <button className="remove" onClick={() => removeFromCart(index)}>Remove</button>
                        </div>
                    ))
                )}
                <Link to="/Loggedinpage"><h2>Back to Shop</h2></Link>
            </div>
        </main>
    );
}

export default CartPage;
