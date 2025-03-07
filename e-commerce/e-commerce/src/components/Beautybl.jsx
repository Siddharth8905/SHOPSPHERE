import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Beautybl() {
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
                       <tr><img src='./beauty/brush.jpg' alt='Tooth-Brush' className='image-item' onClick={()=>alertmsg()}></img></tr> 
                        <tr>Colgate Toothbrush  set of 2</tr>                      
                     </table>
                     <table>
                        <tr><img src='./beauty/paste.jpg' alt='Tooth-Paste' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Colgate Visible White Purple Toothpaste</tr>  
                     </table>
                     <table>
                        <tr><img src='./beauty/facewash.jpg' alt='Facewash' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Sulphate-Free Gentle Skin Hydrating Face Wash </tr>  
                     </table>
                     <table>
                        <tr><img src='./beauty/sunscreen.jpg' alt='Sunscreen' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Minimalist Sunscreen SPF 50 PA++++ </tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Beautybl;
