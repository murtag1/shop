import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from '../actions/actionsCreators';
import actionsTypes from '../actions/actionsTypes';

function* requestBooksAsync() {
  try {
    yield put(actions.requestedBooksListAsync());
    const requestUrl = 'https://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books';
    const booksInfo = yield call(async () => {
      const res = await fetch(requestUrl);
      return res.json();
    });
    yield put(actions.requestedBooksListSuccess(booksInfo.books));
  } catch (error) {
    console.log(error);
    yield put(actions.requestedBooksListError());
  }
}

function* watchRequestBookssAsync() {
  yield takeLatest(actionsTypes.REQUESTED_BOOKS_LIST, requestBooksAsync);
}

export default watchRequestBookssAsync;
