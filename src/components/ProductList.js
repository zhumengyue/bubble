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
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Item = List.Item;
const alert = Modal.alert;

const ProductList = ({ onDelete, products, onAdd }) => {
  const items = products.map(e=>{
    return(
      <Item
        extra={
          <div>
            <Button
              onClick={() =>
                alert('Delete','Are you sure???',[
                  { text: 'Cancel', onPress: () => {} },
                  { text: 'Ok', onPress: () => onDelete(e.id)},
                ])
              }
            >Delete</Button>
            <Button onClick={onAdd}>Add</Button>
          </div>
        }
        key={e.id}
      >{e.name}</Item>
    )
  })


  return(

      <div>
        <List renderHeader={()=>'List'}></List>
        <ReactCSSTransitionGroup
          transitionName="example"
          component="div"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={true}
          transitionEnterTimeout={300}
          transitionLeave={true}
          transitionLeaveTimeout={300}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>

  )
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
