import {useState, useEffect} from 'react'
import Product  from '../components/Product';
import axios from 'axios';
import { Row, Col } from 'antd';


function Cart(){
    const[cartProducts, setCartProducts] = useState([])
    useEffect(() => {
      const getData = async() => {
        const productList = []
        const ids = JSON.parse(localStorage.getItem("products"))
        if(!ids){
          return 
        }
        ids.map(async(id)=>{
           return await axios({
                method: "GET",
                url: `http://localhost:5000/products/${id}`,
              }).then((res)=>{
                productList.push(res.data);
                setCartProducts(prevArray => [...prevArray, res.data])
              })
            })
            console.log(productList[0])
          }
          getData()
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
      if(cartProducts.length=== 0){
        return <h1> Нет товаров! Добавьте сюда что-нибудь!</h1>
      } else{
      return(
    <div>
      
        {productList}
        <h1 className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"> Это страница Cart</h1>
    </div>
)
}
}

export default Cart