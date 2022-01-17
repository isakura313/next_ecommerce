import { Button } from 'antd';

function addToCart(id){
    let products = JSON.parse(localStorage.getItem("products"))
    if(!products){
        products = []
    }
    products.push(id)
    localStorage.setItem("products", JSON.stringify(products))
}
function Product(props){
   
    return(
        <div className="product">
            <h3>{props.title}</h3>
            <div>
            <img  src={props.img}  height="200" />
            </div>
            <span> {props.price} </span>
            <Button type="primary" onClick={() => addToCart(props.id)}>добавить</Button>

        </div>
    )
}

export default Product;