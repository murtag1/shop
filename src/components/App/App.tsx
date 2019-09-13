import React from 'react';
import { connect } from 'react-redux';
import MainPage from '../MainPage/MainPage';
import Header from '../Header/Header';
import PopupWindow from '../PopupWindow/PopupWindow';
import BookDetails from '../BookDetails/BookDetails';
import CartDetails from '../CartDetails/CartDetails';

interface PropsType {
  selectedBookInfo: BookInfoType | null;
  isCartVisible: boolean;
}

function App(props: PropsType) {
  return (
    <div className="app">
      <Header />
      <MainPage />
      {props.selectedBookInfo && <PopupWindow>
        <BookDetails />
      </PopupWindow>}
      {props.isCartVisible && <PopupWindow>
        <CartDetails />
      </PopupWindow>}
    </div>
  );
}

function mapStateToProps(store: StoreType) {
  return {
    selectedBookInfo: store.selectedBookInfo,
    isCartVisible: store.isCartVisible,
  };
}

export default connect(mapStateToProps)(App);
