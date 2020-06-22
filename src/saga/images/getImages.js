import { takeLatest, put, apply } from 'redux-saga/effects';
import { api } from '../../apiServices';
import * as actionTypes from '../../actions/actionTypes';
import { getImagesError, getImagesSuccess } from '../../actions/images';

function* getImages() {
  const response = yield apply(api, api.getImages, []);
  if (Object.keys(response).length) {
    yield put(getImagesSuccess(response));
  } else {
    yield put(getImagesError('error'));
  }
}

export function* watchGetImages() {
  yield takeLatest(actionTypes.images.request, getImages);
}
