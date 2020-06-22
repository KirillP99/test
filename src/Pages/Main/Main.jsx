import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { imagesSelector } from '../../selectors';
import { getImages } from '../../actions/images';
import ImageCard from '../../Components/Main/ImageCard/ImageCard';
import Button from '../../UI-Kit/Button/Button';
import withPopup from '../../HOC/withPopup';
import Form from '../../Components/Main/Form/Form';
import styles from './Main.module.scss';

const Main = ({ openPopup }) => {
  const images = useSelector(imagesSelector);
  const isDataReceived = useSelector((state) => state.images.isDataReceived);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  if (!isDataReceived) {
    return <p className={styles.loader}>loading...</p>;
  }

  return (
    <div className={styles.container}>
      {images && !!images.length ? (
        <div className={styles.cards}>
          {images.map((item) => (
            <ImageCard key={item.id} item={item} classNameWrapper={styles.cardWrapper} />
          ))}
        </div>
      ) : (
        <p className={styles.notFoundText}>you have not added some images yet</p>
      )}
      <Button
        type="button"
        classNameWrapper={styles.openPopupButton}
        onClick={() => {
          openPopup({
            PopupComponent: Form,
          });
        }}
      >
        create image
      </Button>
    </div>
  );
};

Main.propTypes = {
  openPopup: PropTypes.func,
};

export default withPopup(Main);
