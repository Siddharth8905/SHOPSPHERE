import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Fashionbl() {
    const alertmsg=()=>{
        alert("please login")
     }
  return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                    <li><Link to="/Dealsbl">Today's Deals</Link></li>
                    <li><Link to ="/Newreleasesbl">New Releases</Link></li>
                    <li><Link to ="/Login">Contact</Link></li>
                    <li><nav><Link to ="/Homepage">Home</Link></nav></li>
                    <li><Link to ="/Login">Login</Link></li> 
                    <li><Link to ="/Login"><img src="shopping.png"/></Link></li>
                </ul>
                <br>
                </br>
                <p><h1><b>Items:</b></h1></p>
                <div className="image-container">
                    <table>
                        <tr><img src='./fashion/greyshirt.jpg' alt='Grey-Shirt' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Men's Regular Fit Shirt-Grey</tr>                      
                     </table>
                     <table>
                        <tr><img src='./fashion/denim.jpg' alt='Denim-Shirt' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Men's Denim Casual Shirt</tr>  
                     </table>
                     <table>
                        <tr><img src='./fashion/blackpant.jpg' alt='Black-Pant' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Men's Stretchable Formal Pants </tr>  
                     </table>
                     <table>
                        <tr><img src='./fashion/bluejean.jpg' alt='Blue-Jean' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Men's Slim Fit Cotton Rich Stretchable Jeans</tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Fashionbl;
