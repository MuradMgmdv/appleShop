import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DATA } from '../Data'
import { addItem, delItem } from '../redux/actions'



function ProductDetali() {
  const [carBtn, setCarBtn] = useState('Add to Cart')

  const proid = useParams()
  const proDetail = DATA.filter(x => x.id == proid.id)
  const product = proDetail[0]

  const dispatch = useDispatch()

  const handleCart = (product) => {
    if(carBtn === 'Add to Cart') {
      dispatch(addItem(product))
      setCarBtn('Remove from Cart')
    } else {
      dispatch(delItem(product))
      setCarBtn('Add to Cart')
    }
  }

  return (
    <>

      <div className="container my-5 py-3" >
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product"  >
            <img src={product.img} alt={product.title} width='500px' height='400px' />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <hr/>
            <h2 className='my-4'>${product.price}</h2>
            <p>{product.desc}</p>
            <button onClick={() => handleCart(product)} className="btn btn-outline-primary">{carBtn}</button>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetali
