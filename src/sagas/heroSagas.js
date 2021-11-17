
import {put} from 'redux-saga/effects';
import * as HeroActionCreators from '../actions/heroActionCreators';
import * as API from '../api';

export function * createHeroSaga (action) {
  try {
    const response = yield API.createHero(action.payload);

    const { data: {
      data: [ hero ]
    } }= response;


    console.log(hero);

    yield put(HeroActionCreators.createHeroSuccess(hero));

  } catch (error) {
    yield put(HeroActionCreators.createHeroError(error));
  }
}