import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../actions/actionsCreators';
import BooksListItem from '../BooksListItem/BooksListItem';

interface PropsType {
  booksInfoList: BookInfoType[];
  dispatch: DispatchType;
  isRequestingBooks: boolean;
}

function BooksList(props: PropsType) {
  useEffect(() => {
    props.dispatch(actions.requestedBooksList());
  }, []);

  return (
    <div className="books-list">
      {props.isRequestingBooks && <div className="books-list__loader">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>}
      {props.booksInfoList.map(bookInfo => <BooksListItem
        title={bookInfo.title}
        imgUrl={bookInfo.image}
        key={bookInfo.isbn13}
        isbn={bookInfo.isbn13}
      />)}
    </div>
  );
}

function mapStateToProps(store: StoreType) {
  return {
    booksInfoList: store.booksInfoList,
    isRequestingBooks: store.isRequestingBooks,
  };
}

export default connect(mapStateToProps)(BooksList);
