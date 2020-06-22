import * as actionTypes from './actionTypes';

export const getImages = () => ({
  type: actionTypes.images.request,
});

export const deleteImage = (id) => ({
  type: actionTypes.images.delete,
  payload: id,
});

export const updateImage = (id, body) => ({
  type: actionTypes.images.update,
  id,
  body,
});

export const createImage = (body) => ({
  type: actionTypes.images.save,
  payload: body,
});

export const getImagesSuccess = (body) => ({
  type: actionTypes.images.success,
  payload: body,
});

export const getImagesError = (error) => ({
  type: actionTypes.images.error,
  payload: error,
});
