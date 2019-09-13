import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../actions/actionsCreators';

interface PropsType {
  numOrders: number;
  dispatch: DispatchType;
}

function CartIcon(props: PropsType) {
  function handleClick() {
    props.dispatch(actions.openedCart());
  }

  return (
    <div
      className="cart-icon"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
      <div className="cart-icon__num">{props.numOrders}</div>
    </div>
  );
}

function mapStateToProps(store: StoreType) {
  return {
    numOrders: store.listBooksInCart.size,
  };
}

export default connect(mapStateToProps)(CartIcon);
