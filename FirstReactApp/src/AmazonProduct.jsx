import Price from "./Price";
import "./Product.css";

function AmazonProduct({title, idx}){
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["10,495", "9,900", "1,199", "329"];
    let description = [["8000 DPI", "5 Buttons"], ["Intuitive surface", "Smooth"], ["Designed for iPad Pro", "Smooth"], ["Wireless", "Rechargable"]]
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice = {oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default AmazonProduct;