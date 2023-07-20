import React from 'react';

const DrumControl = ({ changeSoundGroup }) => (
  <div className='control'>
    <button onClick={changeSoundGroup}>Change Sound Group</button>
  </div>
);

export default DrumControl;
