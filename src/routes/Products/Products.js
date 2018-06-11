/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/11
 * Time : 16:50
 * Desc :
 */
import React from 'react';
import { connect }from 'dva'
import ProductList from '../../components/ProductList';

const Products = ({dispatch, products}) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/del',
      payload: id,
    })
  }

  function back() {
    dispatch({ type: 'products/back' })
  }
  return(
    <div>
      <h2 onClick={back}>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products}/>
    </div>
  )
}

const View = connect(({ products }) => ({
  products,
}))(Products);

export { View }
