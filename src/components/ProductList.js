/**
 * Created by WebStorm
 * User : zhumengyue
 * Date : 2018/6/11
 * Time : 16:59
 * Desc :
 */
import React from 'react';
import PropTypes from 'prop-types';
import { List, Modal, Button } from 'antd-mobile';

const Item = List.Item;
const alert = Modal.alert;

const ProductList = ({ onDelete, products }) => {

  return(
    <div>
      <List renderHeader={()=>'List'}></List>
      {
        products.map(e=>{
          return(
            <Item
              extra={
                <Button
                  onClick={() =>
                    alert('Delete','Are you sure???',[
                      { text: 'Cancel', onPress: () => {} },
                      { text: 'Ok', onPress: () => onDelete(e.id)},
                    ])
                  }
                >Delete</Button>
              }
              key={e.id}
            >{e.name}</Item>
          )
      })
      }
    </div>
  )
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
