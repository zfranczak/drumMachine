import React from 'react';

const DrumControl = ({
  name,
  volume,
  handleVolumeChange,
  changeSoundGroup,
}) => (
  <div className='control'>
    <input
      max='1'
      min='0'
      step='0.01'
      type='range'
      value={volume}
      onChange={handleVolumeChange}
    />
    <h2 id='display'>{name}</h2>
    <button onClick={changeSoundGroup}>Change Sound Group</button>
  </div>
);

export default DrumControl;
