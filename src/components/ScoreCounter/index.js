import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.scss';

const ScoreCounter = ({ cards }) => {
  const scoreCount = useRef(0);
  const [animate, setAnimate] = useState(false);
  const props = useSpring({ x: animate ? 1 : 0 });

  const shakeComponent = {
    transform: props.x
      .to({
        range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        output: [-4, 6, -8, 8, -8, 8, -8, 6, -4, 0],
      })
      .to(x => `translate3d(${x}px, 0, 0)`),
  };

  useEffect(() => {
    if (cards.every((c) => c.visible === true)) {
      scoreCount.current++;
      setAnimate(true);
    }

    return () => setAnimate(false);
  }, [cards]);

  return (
    <animated.div
      className='score-counter-container'
      style={shakeComponent}
    >
      <div className='score-counter-text-container'>
        <h1 className='score-counter'>Score: </h1>
      </div>
      <div className='score-counter-text-container'>
        <h1>{scoreCount.current}</h1>
      </div>
    </animated.div>
  );
};

export default ScoreCounter;
