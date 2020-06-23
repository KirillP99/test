import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imagesSelector } from '../../selectors';
import { getImages } from '../../actions/images';
import Layout from '../../Components/Main/Layout/Layout';
import styles from './Main.module.scss';

const Main = () => {
  const images = useSelector(imagesSelector);
  const isDataReceived = useSelector((state) => state.images.isDataReceived);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  if (!isDataReceived) {
    return <p className={styles.loader}>loading...</p>;
  }

  return <Layout images={images} />;
};

export default Main;
