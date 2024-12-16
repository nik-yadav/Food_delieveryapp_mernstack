import './App.css';
import Home from "./Screens/Home.js"
import Login from "./Screens/Login.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MyOrder from './Screens/MyOrder.js'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Signup from './Screens/SignUp';

import { Context } from './Components/Contextreducer.js';
import Cart from './Screens/Cart.js';


function App() {
  return (
    <Context>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path="/myorder" element={<MyOrder />} />
          </Routes>
      </Router>
    </Context>
  );
}

export default App;
