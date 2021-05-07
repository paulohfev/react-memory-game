import React from 'react';
import shuffleCards from '../../utils/shuffleCards';
import cardsData from '../../data/cardsData';
import './Resetbutton.scss';

const ResetButton = ({ setCards }) => {
  const resetGame = () => {
    setCards(cardsData);
    shuffleCards();
  };

  return (
    <div className='button-container'>
      <button className='reset-button' onClick={resetGame}>
        &#x21bb; Reset
      </button>
    </div>
  );
};

export default ResetButton;
