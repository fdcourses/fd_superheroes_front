import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';

import {createHeroSaga} from './heroSagas';

function * rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_HERO_REQUEST, createHeroSaga)
}

export default rootSaga;