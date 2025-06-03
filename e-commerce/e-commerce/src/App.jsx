import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'; 
import Homepage from './components/Homepage';
import Loggedinpage from'./components/Loggedinpage';
import Appliances from './components/Appliances';
import Electronics from './components/Electronics';
import Fashion from './components/Fashion';
import Beauty from './components/Beauty';
import Contact from './components/Contact';
import Appliancesbl from './components/Appliancesbl';
import Beautybl from './components/Beautybl';
import Fashionbl from './components/Fashionbl';
import Electronicsbl from './components/Electronicsbl';
import Newreleasesbl from './components/Newreleasesbl';
import Newreleases from './components/Newreleases'
import Dealsbl from './components/Dealsbl';
import Deals from './components/Deals';
import Tv from './components/Tv';
import Fridge from './components/Fridge';
import Washing from './components/Washing';
import Ac from './components/Ac';
import Shirt from './components/Shirt';
import Denim from './components/Denim';
import Blackpant from './components/Balckpant';
import Jean from './components/Jean';
import Brush from './components/Brush';
import Paste from './components/Paste';
import Facewash from './components/Facewash';
import Sunscreen from './components/Sunscreen';
import Iphone from './components/Iphone';
import Samsung from './components/Samsung';
import Oneplus from './components/Oneplus';
import Vivo from './components/Vivo';
import CartPage from "./components/CartPage";
import Tws from './components/Tws';
import Oven from './components/Oven';
import Facegel from './components/Facegel';
import Tshirt from './components/Tshirt';
import Jacket from './components/Jacket';
import Shampoo from './components/Shampoo';
import Mac from './components/Mac';
import IronBox from './components/Ironbox';
import SignUp from './components/SignUp';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Homepage />}></Route>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Loggedinpage" element={<Loggedinpage />} />
                    <Route path="/Homepage" element={<Homepage />} />
                    <Route path='/Appliances' element={<Appliances />} />
                    <Route path='/Appliancesbl' element={<Appliancesbl />} />
                    <Route path='/Electronics' element={<Electronics />} />
                    <Route path='/Electronicsbl' element={<Electronicsbl />} />
                    <Route path='/Fashion' element={<Fashion />} />
                    <Route path='/Fashionbl' element={<Fashionbl />} />
                    <Route path='/Beauty' element={<Beauty />} />
                    <Route path='/Beautybl' element={<Beautybl />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Newreleases' element={<Newreleases />} />
                    <Route path='/Newreleasesbl' element={<Newreleasesbl />} />
                    <Route path='/Deals' element={<Deals />} />
                    <Route path='/Dealsbl' element={<Dealsbl />} />
                    <Route path='/Tv' element={<Tv />} />
                    <Route path='/Fridge' element={<Fridge />} />
                    <Route path='/Washing' element={<Washing />} />
                    <Route path='/Ac' element={<Ac />} />
                    <Route path='/Shirt' element={<Shirt />} />
                    <Route path='/Denim' element={<Denim />} />
                    <Route path='/Blackpant' element={<Blackpant />} />
                    <Route path='/Jean' element={<Jean />} />
                    <Route path="/Brush" element={<Brush />} />
                    <Route path="/Paste" element={<Paste />} />
                    <Route path="/Facewash" element={<Facewash />} />
                    <Route path="/Sunscreen" element={<Sunscreen/>} />
                    <Route path="/Iphone" element={<Iphone/>} />
                    <Route path="/Samsung" element={<Samsung/>} />
                    <Route path="/Oneplus" element={<Oneplus/>} />
                    <Route path="/Vivo" element={<Vivo/>} />
                    <Route path="/" element={<Tv />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/Tws" element={<Tws />} />
                    <Route path="/Oven" element={<Oven />} />
                    <Route path="/Facegel" element={<Facegel />} />
                    <Route path="/Tshirt" element={<Tshirt />} />
                    <Route path="/Jacket" element={<Jacket />} />
                    <Route path="/Shampoo" element={<Shampoo />} />
                    <Route path="/Mac" element={<Mac />} />
                    <Route path="/Ironbox" element={<IronBox />} />
                    <Route path="/SignUp" element={<SignUp />} />


                </Routes>
            </Router>
        </>
    );
}

export default App;