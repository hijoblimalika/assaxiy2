import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import SubHeder from "./components/subHeder/SubHeder"
import Home from "./router/home/Home"
import Cart from "./router/cart/Cart"
import Like from "./router/like/Like"
import Trek from "./router/trek/Trek"
import Til from "./router/til/Til"
import Tolov from "./router/tolov/Tolov"
import Footer1 from "./components/footer1/Footer1"
import Footer2 from "./components/footer2/Footer2"
import Footer3 from "./components/footer3/Footer3"
import Footer4 from './components/footer4/Footer4'
import Taqoslash from './router/taqoslash/Taqoslash';
import SingleRoute from './router/single-router/SingleRouter';
import { useSelector, } from 'react-redux';
import Admin from './router/admin/Admin';
import Footer5 from './components/footer5/Footer5';
function App() {
  const auth = useSelector(s=> s.auth) 
    return (
    <div className="App">
      <Navbar />
      <SubHeder/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<SingleRoute />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/like' element={<Like />} />
        <Route path='/taqoslash' element={<Taqoslash />} />
      {
        auth? 
        <Route path='/' element={<Navigate replace to={"/admin"} />} />
        
        :
        <Route path='/admin' element={<Navigate replace to={"/"} />} />
      }
      <Route path='/tolov' element={<Tolov/>}></Route>

<Route path='/trek' element={<Trek/>}></Route>
<Route path='/til' element={<Til/>}></Route>
        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
      {/* <Footer1/>
      <Footer2/>
      <Footer3/> */}

        <Footer1/>
        <Footer2/>
        <Footer3/>
        <Footer4/>
        <Footer5/>
    </div>
  );
}

export default App;
