import React from 'react';

const Card = ({
  card,
  cards,
  selectedCards,
  setCards,
  setSelectedCards 
}) => {
  const flipCard = (card) => {
    const updateCardVisibility = card => {
      return cards.map(c => {
        const changedCardVisibility = {
          ...c,
          visible: true,
        };

        return c.id === card.id ? changedCardVisibility : c;
      })
    }

    setCards(updateCardVisibility(card));
    setSelectedCards([...selectedCards, card]);
  }

  return (
    <div
      className='card'
      onClick={() => flipCard(card)}
    >
      <div className={`card-inner ${card.visible ? 'flip-card' : ''}`}>
        <div className='card-front'></div>
        <div className='card-back'>{card.value}</div>
      </div>
    </div>
  );
};

export default Card;
