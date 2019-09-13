import React, { useState, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actionsCreators';

interface PropsType {
  bookInfo: BookInfoType;
  dispatch: DispatchType;
}

function BookDetails(props: PropsType) {
  const [numBooks, setNumBooks] = useState(0);

  function handleChange(event: ChangeEvent) {
    const changedNumBooks = +(event.currentTarget as HTMLInputElement).value;
    setNumBooks(changedNumBooks);
  }

  function increaseNumBooks() {
    setNumBooks(numBooksPrev => numBooksPrev + 1);
  }

  function decreaseNumBooks() {
    setNumBooks((numBooksPrev) => {
      if (numBooksPrev - 1 < 0) return numBooksPrev;
      return numBooksPrev - 1;
    });
  }

  function addBooksToCart() {
    props.dispatch(actions.addedBooksToCart(numBooks));
  }

  return (
    <div className="book-details">
      <div className="book-details__left">
        <img src={props.bookInfo.image} className="book-details__img" />
      </div>
      <div className="book-details__right">
        <div className="book-details__title">{props.bookInfo.title}</div>
        <div className="book-details__subtitle">{props.bookInfo.subtitle}</div>
        <div className="book-details__price"><b>price:</b> ${props.bookInfo.price}</div>
        <div className="book-details__isbn"><b>ISBN-13:</b> {props.bookInfo.isbn13}</div>
        <a href={props.bookInfo.url} className="book-details__link">Link</a>

        <div className="book-details__num-books">
          <button className="book-details__decrease-num-books" onClick={decreaseNumBooks}>-</button>
          <input
            type="number"
            className="book-details__num-books-input"
            value={numBooks}
            onChange={handleChange}
          />
          <button className="book-details__increase-num-books" onClick={increaseNumBooks}>+</button>
        </div>

        <button
          className="book-details__add-to-cart"
          onClick={addBooksToCart}
        >Add to cart</button>
      </div>
    </div>
  );
}

function mapStateToProps(store: StoreType) {
  return {
    bookInfo: store.selectedBookInfo,
  };
}

export default connect(mapStateToProps)(BookDetails);
