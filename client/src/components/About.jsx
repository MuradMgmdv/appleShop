import React from 'react'
import { NavLink } from 'react-router-dom';


function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1>About Us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nemo molestiae aerum rem doloremque, nihil
              delectus ullam error consectetur? Dicta, non 
              exercitationem in consectetur totam dolorum at 
              voluptate laudantium aliquam, officiis
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nemo molestiae aerum rem doloremque, nihil
              delectus ullam error consectetur? Dicta, non 
              exercitationem in consectetur totam dolorum at 
              voluptate laudantium aliquam, officiis
            </p>
            <NavLink to='/contact' className="btn btn-outline-primary">Contact Us</NavLink>
            
          </div>
          <div className="col-md-6">
            <img src='/assets/office.png' alt='About Us'
            height='400px' width='500px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
