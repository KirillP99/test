import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import Button from '../../../UI-Kit/Button/Button';
import { imagesSelector } from '../../../selectors';
import { createImage, updateImage } from '../../../actions/images';

const RadioButtonWrapper = ({
  id, name, text, positionValue, setPositionValue,
}) => (
  <div className={styles.wrapperInput}>
    <label className={styles.label} htmlFor={id}>{text}</label>
    <input
      className={styles.input}
      type="radio"
      id={id}
      name={name}
      required
      onChange={() => setPositionValue(id)}
      checked={positionValue === id}
    />
  </div>
);

const Form = ({ popupContent, closePopup }) => {
  const [file, setFile] = useState(popupContent ? popupContent.src : '');
  const [text, setText] = useState(popupContent ? popupContent.tooltip.text : '');
  const [positionValue, setPositionValue] = useState(popupContent ? popupContent.tooltip.position : '');

  const images = useSelector(imagesSelector);

  const dispatch = useDispatch();

  const onSubmit = () => {
    const body = {
      id: popupContent && popupContent.id
        || images.length && images[images.length - 1].id + 1 || 1,
      src: file,
      tooltip: {
        text,
        position: positionValue,
      },
    };
    if (popupContent) {
      dispatch(updateImage(popupContent.id, body));
    } else {
      dispatch(createImage(body));
    }
    closePopup();
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <button
        type="button"
        className={styles.exitButton}
        onClick={() => closePopup()}
      >
        x
      </button>
      <div className={styles.fileInputWrapper}>
        <label htmlFor="file">image is {!file && 'not'} selected{!file && ', please select'}</label>
        <input
          accept=".png,.jpg"
          id="file"
          type="file"
          onChange={(e) => {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);

            reader.onload = () => {
              setFile(reader.result);
            };
          }}
          className={styles.inputLoadFile}
        />
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        required
        className={styles.tooltipText}
        placeholder="enter the tooltip text"
      />
      <RadioButtonWrapper
        name="tooltipPosition"
        id="left"
        text="to left"
        positionValue={positionValue}
        setPositionValue={setPositionValue}
      />
      <RadioButtonWrapper
        name="tooltipPosition"
        id="right"
        text="to right"
        positionValue={positionValue}
        setPositionValue={setPositionValue}
      />
      <RadioButtonWrapper
        name="tooltipPosition"
        id="top"
        text="to top"
        positionValue={positionValue}
        setPositionValue={setPositionValue}
      />
      <RadioButtonWrapper
        name="tooltipPosition"
        id="bottom"
        text="to bottom"
        positionValue={positionValue}
        setPositionValue={setPositionValue}
      />
      <RadioButtonWrapper
        name="tooltipPosition"
        id="withCursor"
        text="with cursor"
        positionValue={positionValue}
        setPositionValue={setPositionValue}
      />
      <Button
        type="submit"
        disabled={!file || !text || !positionValue}
      >
        submit
      </Button>
    </form>
  );
};

RadioButtonWrapper.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  positionValue: PropTypes.string,
  setPositionValue: PropTypes.func,
};

Form.propTypes = {
  closePopup: PropTypes.func,
  popupContent: PropTypes.object,
};

export default Form;
