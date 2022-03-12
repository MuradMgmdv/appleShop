import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function CartBtn() {

  const state = useSelector((state) => state.addItem)
  return (
    <>
     <NavLink to="/cart" className="btn btn-primary-outline-primary  ">
       <span className='fa fa-shopping-cart me-1'></span> Cart ({state.length})
     </NavLink>
    </>
  )
}

