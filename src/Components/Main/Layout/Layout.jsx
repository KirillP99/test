import React from 'react';
import PropTypes from 'prop-types';
import withPopup from '../../../HOC/withPopup';
import ImageCard from '../ImageCard/ImageCard';
import Button from '../../../UI-Kit/Button/Button';
import Form from '../Form/Form';
import styles from './Layout.module.scss';

const Layout = ({ images, openPopup }) => (
  <div className={styles.container}>
    {images.length ? (
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

Layout.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  openPopup: PropTypes.func,
};

export default withPopup(Layout);
