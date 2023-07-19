import React, { useEffect } from 'react';
import '../styles/machine.css';

const firstSoundGroup = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'heater-1',
    url: '../src/assets/Heater-1.mp3',
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'heater-2',
    url: '../src/assets/Heater-2.mp3',
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'heater-3',
    url: '../src/assets/Heater-3.mp3',
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'heater-4',
    url: '../src/assets/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'clap',
    url: '../src/assets/Heater-6.mp3',
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'open-hh',
    url: '../src/assets/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    key: 'Z',
    id: 'kick-n-hat',
    url: '../src/assets/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'kick',
    url: '../src/assets/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'closed-hh',
    url: '../src/assets/Cev_H2.mp3',
  },
];

const KeyboardKey = ({ play, sound: { key, keyCode, url } }) => {
  const handleKeydown = (e) => {
    if (e.keyCode === keyCode) {
      play(key);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <button className='drum-pad' onClick={() => play(key)}>
      <audio className='clip' id={key} src={url} />
      {key}
    </button>
  );
};

const Machine = ({ play, id }) => {
  return firstSoundGroup.map((sound) => (
    <KeyboardKey key={id} play={play} sound={sound} />
  ));
};

export default Machine;
