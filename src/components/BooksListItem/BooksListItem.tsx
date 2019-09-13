import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actionsCreators';

interface PropsType {
  title: string;
  imgUrl: string;
  isbn: string;
  dispatch: DispatchType;
}

function BooksListItem(props: PropsType) {
  function handleClick() {
    props.dispatch(actions.selectedBook(props.isbn));
  }

  return (
    <div
      className="books-list-item"
      onClick={handleClick}
    >
      <img src={props.imgUrl} className="books-list-item__img" />
      <div className="books-list-item__title">{props.title}</div>
    </div>
  );
}

function mapDispatchToProps(dispatch: DispatchType) {
  return {
    dispatch,
  };
}

export default connect(undefined, mapDispatchToProps)(BooksListItem);
