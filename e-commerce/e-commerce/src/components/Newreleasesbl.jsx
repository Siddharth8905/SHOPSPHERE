import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Newreleasesbl() {
   const alertmsg=()=>{
      alert("please login")
   }
  return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                    <li><Link to="/Dealsbl">Today's Deals</Link></li>
                    
                    <li><Link to ="/Login">Contact</Link></li>
                    <li><nav><Link to ="/Homepage">Home</Link></nav></li>  
                    <li><Link to ="/Login">Login</Link></li>                 
                    <li><Link to ="/Login"><img src="shopping.png"/></Link></li>
                </ul>
                <br> 
                </br>
                <p><h1><b>New Releases:</b></h1></p>
                <div className="image-container">
                    <table>
                       <tr><img src='./newreleases/jacket.jpg' alt='Leather-Jacket' className='image-item' onClick={()=>alertmsg()}></img></tr> 
                        <tr>Genuine Leather Jacket for Men</tr>                      
                     </table>
                     <table>
                        <tr><img src='./newreleases/shampoo.jpg' alt='Shampoo' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Bond Repair Shampoo For Damaged, Dry & Frizzy Hair</tr>  
                     </table>
                     <table>
                        <tr><img src='./newreleases/laptop.jpg' alt='Laptop' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>MacBook Air 13″ Laptop with M3 chip </tr>  
                     </table>
                     <table>
                        <tr><img src='./newreleases/iron.jpg' alt='IronBox' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>PHILIPS Steam Iron 2200 Watts</tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Newreleasesbl;
