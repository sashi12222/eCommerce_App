/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import jacket from '../../assets/img/jacket.png'

const ProductCards = ({id,name,brands,price,category,url}) => {
  return <div className="py-4 px-6 shadow rounded mt-5 relative bg-white">
    <span className='text-xs bg-green-500 rounded-xl px-2 text-white absolute right-4 top-4 '>{category}</span>
    <img src={url ?? jacket } alt="" className='h-60 w-auto mx-auto' />
    
    <h2 className='text-xl font-semibold'>{name}</h2>
    <p>{brands}</p>
   
    <p className='my-2'>
    <span className='text-xl mr-1'>
        ${Math.floor(price*0.8)}</span> 
        <span className='line-through text-slate-300 text-sm'>${price}</span>
    </p>
       
    <Link to={id} className='bg-green-700 hover:bg-green-950 mt-2 px-3 py-1 rounded text-white'>Buy Now</Link>
  </div>
}

export default ProductCards