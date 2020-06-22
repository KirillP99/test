import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

const positionForTooltip = {
  right: { top: '50%', right: '0' },
  left: { top: '50%', left: '0' },
  top: { top: '0', left: '50%' },
  bottom: { bottom: '0', left: '50%' },
};

const Tooltip = ({
  text, position, withCursorPosition,
}) => (
  <p
    style={positionForTooltip[position] || withCursorPosition}
    className={styles.content}
  >
    {text}
  </p>
);

Tooltip.propTypes = {
  position: PropTypes.string,
  text: PropTypes.string,
  withCursorPosition: PropTypes.shape({
    left: PropTypes.string,
    top: PropTypes.string,
  }),
};

export default Tooltip;
