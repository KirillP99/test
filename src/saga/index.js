import { all } from 'redux-saga/effects';
import { watchGetImages } from './images/getImages';
import { watchDeleteImage } from './images/deleteImage';
import { watchCreateImage } from './images/createImage';
import { watchUpdateImage } from './images/updateImage';

export function* rootSaga() {
  yield all(
    [
      watchGetImages(),
      watchDeleteImage(),
      watchCreateImage(),
      watchUpdateImage(),
    ],
  );
}
