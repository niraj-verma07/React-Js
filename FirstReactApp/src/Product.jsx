import "./Product.css";
function Product({title, price, features}){
    const list = features.map((feature)=> <li>{feature}</li>)

    const styles = { backgroundColor : price > 30000 ?"green" : ""}
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {price >= 30000 ? <p>"Discount of 5%"</p> : null}
            <p>{list}</p>
        </div>
    )
} 

export default Product;