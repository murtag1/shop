import React from 'react';
import { connect } from 'react-redux';

function renderCartDetailsList(listBooksInCart: Map<string, number>) {
  const cartDetailsList: JSX.Element[] = [];
  listBooksInCart.forEach((value, key) => (
    cartDetailsList.push(
      <div className="cart-details__item" key={key}>
        <span className="cart-details__item-title">{key}</span>
        <span className="cart-details__item-num">{value}pcs</span>
      </div>,
    )
  ));

  if (cartDetailsList.length === 0) {
    return (
      <div className="cart-details__empty-message">The cart is empty</div>
    );
  }
  return cartDetailsList;
}

interface PropsType {
  listBooksInCart: Map<string, number>;
}

function CartDetails(props: PropsType) {
  return (
    <div className="cart-details">
      {renderCartDetailsList(props.listBooksInCart)}
    </div>
  );
}

function mapStateToProps(store: StoreType) {
  return {
    listBooksInCart: store.listBooksInCart,
  };
}

export default connect(mapStateToProps)(CartDetails);
