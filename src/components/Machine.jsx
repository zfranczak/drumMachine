import React, { useEffect } from 'react';
import '../styles/machine.css';

const KeyboardKey = ({ play, sound: { id, key, keyCode, url } }) => {
  const handleKeydown = (e) => {
    if (e.keyCode === keyCode) {
      play(key, id);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <button id={keyCode} className='drum-pad' onClick={() => play(key, id)}>
      <audio className='clip' id={key} src={url} />
      {key}
    </button>
  );
};

const Machine = ({ play, id, sounds }) => (
  <div className='keyboard'>
    {sounds.map((sound) => (
      <KeyboardKey key={id} play={play} sound={sound} />
    ))}
  </div>
);

export default Machine;
