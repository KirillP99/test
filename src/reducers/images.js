import * as actionTypes from '../actions/actionTypes';

const initialValue = {
  images: null,
  isDataReceived: false,
  isFetch: false,
  error: null,
};

export const images = (state = initialValue, { type, payload }) => {
  switch (type) {
    case actionTypes.images.request:
    case actionTypes.images.delete:
    case actionTypes.images.save:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.images.success:
      return {
        ...state,
        images: payload,
        isDataReceived: true,
        isFetch: false,
      };

    case actionTypes.images.error:
      return {
        ...state,
        isDataReceived: true,
        isFetch: false,
        error: payload,
      };

    default:
      return state;
  }
};
