import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from '../Data'
// console.log(DATA);

// 
function ProductDetali() {
  const [carBtn, setCarBtn] = useState('Add to Cart')

  const proid = useParams()
  // console.log(proid);
  const proDetail = DATA.filter(x => x.id == proid.id)
  // console.log(proDetail);
  const product = proDetail[0]
  // console.log(product);

  const handleCart = (product) => {
    if(carBtn === 'Add to Cart') {
      setCarBtn('Remove from Cart')
    } else {
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
