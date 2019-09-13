import actionsTypes from './actionsTypes';

export function requestedBooksList() {
  return {
    type: actionsTypes.REQUESTED_BOOKS_LIST,
  };
}

export function requestedBooksListAsync() {
  return {
    type: actionsTypes.REQUESTED_BOOKS_LIST_ASYNC,
  };
}

export function requestedBooksListSuccess(booksInfoList: BookInfoType[]) {
  return {
    type: actionsTypes.REQUESTED_BOOKS_LIST_SUCCESS,
    booksInfoList,
  };
}

export function requestedBooksListError() {
  return {
    type: actionsTypes.REQUESTED_BOOKS_LIST_ERROR,
  };
}

export function selectedBook(isbn: string) {
  return {
    type: actionsTypes.SELECTED_BOOK,
    isbn,
  };
}

export function closedPopup() {
  return {
    type: actionsTypes.CLOSED_POPUP,
  };
}

export function addedBooksToCart(numBooks: number) {
  return {
    type: actionsTypes.ADDED_BOOKS_TO_CART,
    numBooks,
  };
}

export function openedCart() {
  return {
    type: actionsTypes.OPENED_CART,
  };
}
