import React from 'react';
import './CSS/Cart.css';

const Cart = ({cart,setCart}) => {

    function handleRemove(id){
        const arr = cart.filter(item=>item.id!==id)
        setCart(arr)
    }

  return (
    <div className='cart'>
      <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Incre</th>
                <th>QTY</th>
                <th>Decre</th>
                <th>Total</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((item)=>{
                return(
                    <tr>
                        <td><img src={item.image} alt='' height={'50px'} width={'50px'}></img></td>
                        <td>{item.title}</td>
                        <td><button>+</button></td>
                        <td>{item.qty}</td>
                        <td><button>-</button></td>
                        <td>{item.price}</td>
                        <td><button onClick={()=>handleRemove(item.id)}>Remove</button></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Cart
