import React from 'react';
import PropTypes from 'prop-types';
import styles from './Popup.module.scss';

const Popup = ({ closePopup, children }) => (
  <>
    <div className={styles.wrapper} onClick={() => closePopup()} />
    <div className={styles.popupWrapper}>
      {children}
    </div>
  </>
);

Popup.propTypes = {
  closePopup: PropTypes.func,
  children: PropTypes.node,
};

export default Popup;
