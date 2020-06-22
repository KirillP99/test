import React, { useState } from 'react';
import Popup from '../UI-Kit/Popup/Popup';

const withPopup = (Component, { isOpenByDefault = false } = {}) => (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(isOpenByDefault);
  const [popupContent, setPopupContent] = useState(null);

  const closePopup = () => setIsOpenPopup(false);
  const openPopup = ({ PopupComponent, content }) => {
    setIsOpenPopup(true);
    setPopupContent(<PopupComponent popupContent={content} closePopup={closePopup} />);
  };

  return (
    <>
      <Component {...props} openPopup={openPopup} />
      {isOpenPopup && (
        <Popup closePopup={closePopup}>
          {popupContent}
        </Popup>
      )}
    </>
  );
};

export default withPopup;
