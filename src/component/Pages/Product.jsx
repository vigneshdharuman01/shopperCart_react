import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Breadcrums/Breadcrums';
import { ShopContext } from '../../Context/ShopContext'
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RealtedProduct from '../RelatedProducts/RealtedProduct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id === Number(productId));
  
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay  product={product}/>
      <DescriptionBox/>
      <RealtedProduct/>
    </div>
  )
}

export default Product