import actionsTypes from './actions/actionsTypes';

const initialState: StoreType = {
  isRequestingBooks: false,
  isCartVisible: false,
  booksInfoList: [],
  selectedBookInfo: null,
  selectedBookId: null,
  isPopupVisible: false,
  listBooksInCart: new Map(),
};

function reducer(state = initialState, action: ActionType): StoreType {
  switch (action.type) {
    case actionsTypes.REQUESTED_BOOKS_LIST_ASYNC:
      return Object.assign({}, state, { isRequestingBooks: true });
    case actionsTypes.REQUESTED_BOOKS_LIST_SUCCESS:
      return Object.assign({}, state, {
        isRequestingBooks: false,
        booksInfoList: action.booksInfoList,
      });

    case actionsTypes.SELECTED_BOOK: {
      const selectedBookInfo = state.booksInfoList.find(book => book.isbn13 === action.isbn);
      if (!selectedBookInfo) return state;
      return Object.assign({}, state, { selectedBookInfo });
    }

    case actionsTypes.CLOSED_POPUP:
      return Object.assign({}, state, { selectedBookInfo: null, isCartVisible: false });

    case actionsTypes.ADDED_BOOKS_TO_CART: {
      if (action.numBooks === 0) return Object.assign({}, state, { selectedBookInfo: null });
      let totalNumBooks = action.numBooks;
      const numBooksInCart = state.listBooksInCart.get(state.selectedBookInfo.title);
      if (numBooksInCart) totalNumBooks += numBooksInCart;
      return Object.assign({}, state, {
        selectedBookInfo: null,
        listBooksInCart: state.listBooksInCart.set(state.selectedBookInfo.title, totalNumBooks),
      });
    }

    case actionsTypes.OPENED_CART:
      return Object.assign({}, state, { isCartVisible: true });

    default:
      return state;
  }
}

export default reducer;
