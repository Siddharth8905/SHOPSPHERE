import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Beauty() {
   const beauty=[{id:9,img:"./beauty/brush.jpg" ,name:"Colgate Toothbrush set of 2"  },
      {id:10,img:"./beauty/paste.jpg" ,name:"Colgate Visible White Purple Toothpaste"  }]
  return (
        <main>
            <header><h2>SHOPSPHERE</h2></header>
            <section>
                <ul>
                    <li><Link to="/Deals">Today's Deals</Link></li>
                    <li><Link to ="/Newreleases">New Releases</Link></li>
                    <li><Link to ="/Contact">Contact</Link></li>                   
                    <li><nav><Link to ="/Loggedinpage">Home</Link></nav></li>
                    <li><nav><Link to ="/Homepage">Logout</Link></nav></li>
                    <img src="cart.png"/>
                </ul>
                <br>
                </br>
                <p><h1><b>Items:</b></h1></p>
                <div className="image-container">
                    <table>
                       <Link to ="/Brush"><tr><img src='./beauty/brush.jpg' alt='Tooth-Brush' className='image-item'></img></tr> </Link>
                        <tr>Colgate Toothbrush  set of 2</tr>                      
                     </table>
                     <table>
                        <Link to ="/Paste"><tr><img src='./beauty/paste.jpg' alt='Tooth-Paste' className='image-item'></img></tr></Link>
                        <tr>Colgate Visible White Purple Toothpaste</tr>  
                     </table>
                     <table>
                       <Link to ="/Facewash"><tr><img src='./beauty/facewash.jpg' alt='Facewash' className='image-item'></img></tr></Link>
                        <tr>Sulphate-Free Gentle Skin Hydrating Face Wash </tr>  
                     </table>
                     <table>
                     <Link to ="/Sunscreen"><tr><img src='./beauty/sunscreen.jpg' alt='Sunscreen' className='image-item'></img></tr></Link>
                        <tr>Minimalist Sunscreen SPF 50 PA++++ </tr>  
                     </table>                    
        </div>
            </section>
        </main>
  );
}

export default Beauty;