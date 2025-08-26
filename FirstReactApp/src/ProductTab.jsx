import Product from "./Product"
function ProductTab(){
    let option = ["Hi-tech", "durable", "fast"]
    return(
    <>
   <Product title ="Macbook Air M4" price={120000} features={option}/>
   <Product title="Iphone" price={129000} features={option}/>
   <Product title="JBL HeadPhone" price={5000} features={option}/>
  </>
    )
}

export default ProductTab;