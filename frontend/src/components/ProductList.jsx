import products from "../image.json";

const ProductList = (props) => {
  return (
    <div>
       <img src={props.products.img} alt="" />
       <p>{props.title}</p> 
       <p>price : {props.price}</p>
    </div>
  )
}

export default ProductList