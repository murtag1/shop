import { all } from 'redux-saga/effects';
import watchRequestBooksListAsync from './requestBooksList';

function* rootSaga() {
  yield all([
    watchRequestBooksListAsync(),
  ]);
}

export default rootSaga;
