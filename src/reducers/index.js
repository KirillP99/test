import { combineReducers } from 'redux';
import { images } from './images';

const createRootReducer = () => combineReducers({
  images,
});
export default createRootReducer;
