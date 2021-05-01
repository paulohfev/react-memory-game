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

  const compareCards = (selectedCards) => {
    if (selectedCards.length == 2) {
      if (selectedCards[0].value == selectedCards[1].value) {
        console.log('matched!')
      } else {
        console.log('not matched!')
      }

      setSelectedCards([]);
    }
  }

  const flipCard = (event, card) => {
    event.target.parentNode.style.transform = 'rotateY(180deg)';
    setSelectedCards([...selectedCards, card]);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    compareCards(selectedCards);
  }, [selectedCards])

  return (
    <div className='container'>
      <section className='cards-container'>
        <div className='cards'>
          {cards.map((card, index) => {
            return (
              <div
                className='card'
                key={index}
                onClick={(event) => flipCard(event, card)}
              >
                <div className='card-inner'>
                  <div className='card-front'></div>
                  <div className={`card-back ${card.visible ? 'flip-card' : ''}`}>
                    {card.value}
                  </div>
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
