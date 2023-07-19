import React from 'react';
import Machine from './components/Machine';

const App = () => {
  const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className='app'>
      <Machine play={play} />
    </div>
  );
};

export default App;
