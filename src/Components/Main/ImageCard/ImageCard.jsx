import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { deleteImage } from '../../../actions/images';
import Button from '../../../UI-Kit/Button/Button';
import Tooltip from '../../../UI-Kit/Tooltip/Tooltip';
import withPopup from '../../../HOC/withPopup';
import Form from '../Form/Form';
import styles from './ImageCard.module.scss';

const ImageCard = ({ item, classNameWrapper, openPopup }) => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const [isActiveUpdateButton, setIsActiveUpdateButton] = useState(false);
  const [withCursorPosition, setWithCursorPosition] = useState(null);

  const dispatch = useDispatch();

  return (
    <>
      <article className={cx(styles.card, classNameWrapper)}>
        <div
          className={styles.imageWrapper}
          onMouseOver={() => setIsOpenTooltip(true)}
          onMouseMove={(e) => {
            if (item.tooltip.position === 'withCursor') {
              const bounds = e.currentTarget.getBoundingClientRect();
              setWithCursorPosition({ top: `${e.clientY - bounds.top}px`, left: `${e.clientX - bounds.left}px` });
            }
          }}
          onClick={() => setIsActiveUpdateButton(!isActiveUpdateButton)}
          onMouseLeave={() => setIsOpenTooltip(false)}
        >
          {isOpenTooltip && (
          <Tooltip
            position={item.tooltip.position}
            text={item.tooltip.text}
            withCursorPosition={withCursorPosition}
          />
          )}
          <img
            src={item.src}
            alt="card"
            className={styles.image}
          />
        </div>
        {isActiveUpdateButton && (
          <Button
            classNameWrapper={styles.buttonUpdate}
            type="button"
            onClick={() => {
              openPopup({
                PopupComponent: Form,
                content: item,
              });
            }}
          >
            Update
          </Button>
        )}
        <Button
          classNameWrapper={styles.buttonDelete}
          onClick={() => dispatch(deleteImage(item.id))}
          type="button"
        >
          Delete
        </Button>
      </article>
    </>
  );
};

ImageCard.propTypes = {
  item: PropTypes.shape({
    src: PropTypes.string,
    tooltip: PropTypes.shape({
      position: PropTypes.string,
      text: PropTypes.string,
    }),
    id: PropTypes.number,
  }),
  classNameWrapper: PropTypes.string,
  openPopup: PropTypes.func,
};

export default withPopup(ImageCard);
