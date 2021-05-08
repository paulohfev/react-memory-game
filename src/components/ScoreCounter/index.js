import React, { useEffect, useRef } from 'react';
import './styles.scss';

const ScoreCounter = ({ cards }) => {
  const scoreCount = useRef(0);

  useEffect(() => {
    if (cards.every((c) => c.visible === true)) {
      scoreCount.current++;
    }
  }, [cards]);

  return (
    <div className='score-counter-container'>
      <div className='score-counter-text-container'>
        <h1 className='score-counter'>Score: </h1>
      </div>
      <div className='score-counter-text-container'>
        <h1>{scoreCount.current}</h1>
      </div>
    </div>
  );
};

export default ScoreCounter;
