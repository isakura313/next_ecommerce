import {useState, useEffect} from 'react'
import Product  from '../components/Product';
import axios from 'axios';
import { Row, Col } from 'antd';


function Cart(){
    const[cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        const ids = JSON.parse(localStorage.getItem("products"))
        const getData = [];
        ids.map((async(id) =>{
           const product =  await axios({
                method: "GET",
                url: `http://localhost:5000/products/${id}`,
              });
              getData.push(product.data)
        }))
        setCartProducts(getData)
        console.log(getData)
      }, []);

      const productList = cartProducts.map((product) => {
        return (
          <Col className="gutter-row" span={12} key={product.id}>
          <Product
            id={product.id}
            title={product.name}
            img = {product.img}
            price={product.price}
            discount={product.discount}
          />
          </Col>
        );
      });
return(
    <div>
        {productList}
        <h1 className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"> Это страница Cart</h1>
    </div>
)
}

export default Cart