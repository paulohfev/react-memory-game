import React, { useEffect, useState } from 'react'
import cardsData from '../../data/cardsData';
import Card from '../Card';
import shuffleCards from '../../utils/shuffleCards';
import './Cardslist.scss';

const CardsList = () => {
  const [cards, setCards] = useState(cardsData);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      compareCards(selectedCards);
    }, 1000);
  }, [selectedCards]);

  const compareCards = (selectedCards) => {
    const [firstCard, secondCard] = selectedCards;

    if (selectedCards.length === 2) {
      if (firstCard.value !== secondCard.value) {
        const flippedCards = cards.map(card => {
          const changedCardVisibility = {
            ...card,
            visible: false,
          };
          const isSelectedCard = card.id === firstCard.id || card.id === secondCard.id;

          return isSelectedCard ? changedCardVisibility : card;
        });

        setCards(flippedCards);
      }

      setSelectedCards([]);
    }
  }

  return (
    <div className='cards-list'>
      {cards.map((card) => {
        return (
          <Card
            card={card}
            cards={cards}
            key={card.id}
            selectedCards={selectedCards}
            setCards={setCards}
            setSelectedCards={setSelectedCards}
          />
        );
      })}
    </div>
  );
};

export default CardsList;
