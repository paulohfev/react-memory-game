import React, { useEffect, useState } from 'react';
import cardsData from './data/cardsData';
import './App.scss';

const App = () => {
  const [cards, setCards] = useState(cardsData);
  const [selectedCards, setSelectedCards] = useState([]);

  const shuffleCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  }

  const updateCardVisibility = (card, visible = true) => {
    return cards.map(c => {
      if (c.id === card.id) {
        return {
          ...c,
          visible: visible,
        }
      }
      return c;
    })
  }

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

  const flipCard = (card) => {
    setCards(updateCardVisibility(card));
    setSelectedCards([...selectedCards, card]);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      compareCards(selectedCards);
    }, 1000);
  }, [selectedCards]);

  return (
    <div className='container'>
      <section className='cards-container'>
        <div className='cards'>
          {cards.map((card) => {
            return (
              <div
                className='card'
                key={card.id}
                onClick={() => flipCard(card)}
              >
                <div className={`card-inner ${card.visible ? 'flip-card' : ''}`}>
                  <div className='card-front'></div>
                  <div className='card-back'>{card.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
