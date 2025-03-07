import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Appliancesbl() {
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
                       <tr><img src='./appliances/tv.jpg' alt='TV' className='image-item' onClick={()=>alertmsg()} ></img></tr> 
                        <tr>Samsung 43 inches LED TV</tr>                      
                     </table>
                     <table>
                        <tr><img src='./appliances/fridge.jpg' alt='Fridge' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Bosch 243L Refrigerator</tr>  
                     </table>
                     <table>
                        <tr><img src='./appliances/washingmachine.jpg' alt='Washing machine' className='image-item' onClick={()=>alertmsg()}></img></tr>
                        <tr>Bosch 8kg Washing Machine</tr>  
                     </table>
                     <table>
                        <tr><img src='./appliances/ac.jpg' alt='Air Conditioner' className='image-item'onClick={()=>alertmsg()}></img></tr>
                        <tr>Samsung 1.5 Ton 5 Star AI Inverter Smart Split AC </tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Appliancesbl;
