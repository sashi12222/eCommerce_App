import Title from "../../components/Title"
import { products } from "../../data"
import ProductCards from "../../components/products/Card"
const ProductList = () => {
  return <section className="py-12 bg-slate-100">
     <div className="max-w-screen-xl mx-auto px-4">
    <Title label="New Arrivals" />
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {products.map(product=>  <ProductCards key={products.id}
     {...product} />)}
    
      
    </div>
     </div>
  </section>
}

export default ProductList