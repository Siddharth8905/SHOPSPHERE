import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Dealsbl() {
   const alertmsg=()=>{
      alert("please login")
   }
  return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                    <li><Link to ="/Newreleasesbl">New Releases</Link></li>
                    
                    <li><Link to ="/Login">Contact</Link></li>
                    <li><nav><Link to ="/Homepage">Home</Link></nav></li>
                    <li><Link to ="/Login">Login</Link></li>
                    <li><Link to ="/Login"><img src="shopping.png"/></Link></li>
                </ul>
                <br>
                </br>
                <p><h1><b>Deals:</b></h1></p>
                <div className="image-container">
                    <table>
                       <tr><img src='./deals/buds.jpg' alt='Ear-Buds' className='image-item' onClick={()=>alertmsg()}></img></tr> 
                        <tr>TWS Ear Buds Wireless Earphones with mic</tr>                      
                     </table>
                     <table>
                        <tr><img src='./deals/oven.jpg' alt='Microwave Oven' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>LG 28 L Convection Microwave Oven</tr>  
                     </table>
                     <table>
                        <tr><img src='./deals/sun.jpg' alt='Sunscreen' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Deconstruct Face Gel Sunscreen SPF 50 + and PA+++</tr>  
                     </table>
                     <table>
                        <tr><img src='./deals/tshirt.jpg' alt='T-shirt' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Allen Solly Men's Solid Regular Fit Polo</tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Dealsbl;
