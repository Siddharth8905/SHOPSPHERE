import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import '../styles/Cart.css';

function CartPage() {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);

    const handleBuyNow = () => {
        alert("Proceeding to checkout! 🛒");
    };

    return (
        <main>
            <div>
                <header><h1>SHOPSPHERE</h1></header>
                <h1>Your Cart :</h1>
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <h2>Your cart is empty!</h2>
                    </div>
                ) : (
                    <>
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.img} alt={item.name} width="100" />
                                <h3>{item.name}</h3>
                                <h3>₹{item.price}</h3>
                                <button className="cartbtn" onClick={() => removeFromCart(index)}>Remove</button>
                            </div>
                        ))}
                        <h2 >Total Price: ₹{totalPrice}</h2>

                        
                        <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
                    </>
                )}
                <Link to="/Loggedinpage"><h2>Back to Shop</h2></Link>
            </div>
        </main>
    );
}

export default CartPage;


