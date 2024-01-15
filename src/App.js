import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Amazon from './components/amazon';

function App() {

  const [show,setShow] = useState(true);
  const [cart,setCart] =useState([]);

  const handleClick= (item) => {
    if(cart.indexOf(item) !== -1) return;
    setCart([...cart,item]);
  }

  return (
   <React.Fragment>
    <Navbar setShow={setShow} />
    { show ? <Amazon /> : "Cart"}
   </React.Fragment>
  );
}

export default App;
