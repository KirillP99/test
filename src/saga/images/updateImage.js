import {
  takeLatest, put, apply, select,
} from 'redux-saga/effects';
import { api } from '../../apiServices';
import * as actionTypes from '../../actions/actionTypes';
import { getImagesSuccess } from '../../actions/images';

const getImages = (state) => state.images.images;

function* updateImage({ id, body }) {
  const response = yield apply(api, api.updateImage, [id, body]);
  const images = yield select(getImages);
  const oldElemIndex = images.findIndex((item) => item.id === id);
  const newArr = [...images.slice(0, oldElemIndex), response, ...images.slice(oldElemIndex + 1)];
  yield put(getImagesSuccess(newArr));
}

export function* watchUpdateImage() {
  yield takeLatest(actionTypes.images.update, updateImage);
}
