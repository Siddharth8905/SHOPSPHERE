import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Electronicsbl() {
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
                       <tr><img src='./electronics/iphone.webp' alt='I-Phone' className='image-item' onClick={()=>alertmsg()}></img></tr> 
                        <tr>IPhone 16 Pro 256 GB</tr>                      
                     </table>
                     <table>
                        <tr><img src='./electronics/samsung.jpg' alt='S25 Ultra' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Samsung Galaxy S25 Ultra 5G </tr>  
                     </table>
                     <table>
                        <tr><img src='./electronics/oneplus.webp' alt='Oneplus 13' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>OnePlus 13 | Smarter with OnePlus AI </tr>  
                     </table>
                     <table>
                        <tr><img src='./electronics/vivo.jpg' alt='Vivo X200' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Vivo X200 5G  </tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Electronicsbl;
