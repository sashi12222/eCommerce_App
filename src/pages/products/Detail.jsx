import { useParams } from "react-router-dom"
import jacket from '../../assets/img/jacket.png'
import Title from "../../components/Title";
import { FaCartPlus } from "react-icons/fa";

const Detail = () => {
    const params=useParams();
    console.log(params)
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-around relative gap-20">
          <img src={jacket} alt="" className="w-1/2" />
          <div>
          <span className='text-xs bg-green-500 rounded-xl px-2 text-white absolute  '>Clothing</span>
            <Title label="Jacket" />
            <p className="py-2 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus ut quis facere quam dolorum dolor, odio commodi quisquam ratione architecto voluptatem ad quod sequi totam veniam id ex. Repudiandae!</p>
            <p className="font-semibold">H&M</p>
            <p className='my-2'>
    <span className='text-xl mr-1'>
        $3000</span> 
        <span className='line-through text-slate-300 text-sm'>$6000</span>

    </p>
    <button className='bg-green-700 hover:bg-green-950 mt-4 px-3 py-1 rounded text-white flex items-center'>Add To Cart
      <FaCartPlus className="ml-2"/>
    </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail