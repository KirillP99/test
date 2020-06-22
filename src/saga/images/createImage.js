import {
  takeLatest, put, apply, select,
} from 'redux-saga/effects';
import { api } from '../../apiServices';
import * as actionTypes from '../../actions/actionTypes';
import { getImagesSuccess } from '../../actions/images';

const getImages = (state) => state.images.images;

function* createImage({ payload }) {
  const response = yield apply(api, api.createImage, [payload]);
  const images = yield select(getImages);
  yield put(getImagesSuccess([...images, response]));
}

export function* watchCreateImage() {
  yield takeLatest(actionTypes.images.save, createImage);
}
