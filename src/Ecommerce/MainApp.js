import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';

const MainApp = () => {
  const[show,setShow] = useState(true);
  const[cart,setCart] = useState([]);
  const[search,setSearch]= useState('');


  function handleClick(item){
    setCart([...cart,item])
  }

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} setSearch={setSearch}/>
      {(show)?(<Home handleClick={handleClick} search={search}/>) :(<Cart cart={cart} setCart={setCart}/>)}
    </div>
  )
}

export default MainApp
