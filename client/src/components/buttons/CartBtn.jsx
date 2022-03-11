import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CartBtn() {
  return (
    <>
     <NavLink to="/cart" className="btn btn-primary-outline-primary  ">
       <span className='fa fa-shopping-cart me-1'></span> Cart (0)
     </NavLink>
    </>
  )
}

