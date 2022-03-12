import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delItem } from '../redux/actions'

function Cart() {
  const state = useSelector((state) => state.addItem)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delItem(item))
  }

  const carItems = (cartItem) => {
    return (
      <div className="px-4 me-5 bg-light rounted-3" key={cartItem.id} >
        <div className="container py-4">
          <button onClick={() => handleClose(cartItem)} className='btn-close float-end' aria-label='Close' ></button>
          <div className="row" >
            <div className="col-md-4">
              <img src={cartItem.img} alt={cartItem.title} height='200px' />
              <h3>{cartItem.title}</h3>
              <p className='lead fw-bold' >${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const emptyCart = () => {
    return(
      <div className="px-4 me-5 bg-light rounted-3">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
   </div>
    )

  }

  const button = () => {
    return  (
      <div className="container">
        <div className="row">
          <NavLink to='/checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed To checkout</NavLink>
        </div>
      </div>
    )
  }

  return (
    <>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(carItems)}
    {state.length !== 0 && button()}
    </>
  )
}

export default Cart
