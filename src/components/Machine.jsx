import React from 'react';

const Machine = () => {
  return (
    <div>
      <div className='container' id='drum-machine'>
        <div id='display'>
          <div className='drum-pad' id='heater-1'>
            Q
            <audio
              className='clip'
              id='Q'
              controls
              src='../src/assets/Heater-1.mp3'
            ></audio>
          </div>
          <div className='drum-pad' id='heater-2'>
            W
            <audio
              className='clip'
              id='W'
              controls
              src='../src/assets/Heater-2.mp3'
            ></audio>
          </div>
          <div className='drum-pad' id='heater-3'>
            E
            <audio
              className='clip'
              id='E'
              controls
              src='../src/assets/Heater-3.mp3'
            ></audio>
          </div>
          <div className='drum-pad' id='heater-4'>
            A
            <audio
              className='clip'
              id='A'
              controls
              src='../src/assets/Heater-4_1.mp3'
            ></audio>
          </div>
          <div className='drum-pad' id='clap'>
            S
            <audio
              className='clip'
              id='S'
              controls
              src='../src/assets/Heater-6.mp3'
            ></audio>
          </div>
          <div className='drum-pad' id='open-hh'>
            D
            <audio
              className='clip'
              id='D'
              controls
              src='../src/assets/Dsc_Oh.mp3'
            ></audio>
          </div>
          <div className='drum-pad' id='kick-n-hat'>
            Z
            <audio
              className='clip'
              id='Z'
              controls
              src='../src/assets/Kick_n_Hat.mp3'
            ></audio>
          </div>
          <div className='drum-pad' id='kick'>
            X
            <audio
              className='clip'
              id='X'
              controls
              src='../src/assets/RP4_KICK_1.mp3'
            ></audio>
          </div>
          <div className='drum-pad' id='closed-hh'>
            C
            <audio
              className='clip'
              id='C'
              controls
              src='../src/assets/Cev_H2.mp3'
            ></audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machine;
