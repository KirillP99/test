import {
  takeLatest, put, apply, select,
} from 'redux-saga/effects';
import { api } from '../../apiServices';
import * as actionTypes from '../../actions/actionTypes';
import { getImagesSuccess } from '../../actions/images';

const getImages = (state) => state.images.images;

function* deleteImage({ payload }) {
  yield apply(api, api.deleteImage, [payload]);
  const images = yield select(getImages);
  const newArrImages = images.filter((item) => item.id !== payload);
  yield put(getImagesSuccess(newArrImages));
}

export function* watchDeleteImage() {
  yield takeLatest(actionTypes.images.delete, deleteImage);
}
