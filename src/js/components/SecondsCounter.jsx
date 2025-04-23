import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
const SecondsCounter = ({ seconds }) => {
  return (
    <div style={{ textAlign: 'center', fontSize: '2em' }}>
      <FontAwesomeIcon icon={faClock} style={{ marginRight: '15px' }} />
      {seconds}
    </div>
  );
};
export default SecondsCounter;