import React, { useEffect } from 'react';
import './App.scss';

const App = () => {
  const shuffleCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  }

  const flipCard = (event) => {
    event.target.parentNode.style.transform = 'rotateY(180deg)';
  }

  const cardsData = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  const cardsList = cardsData.map((value) => {
    return (
      <div key={Math.floor(Math.random() * 1000)} className='card' onClick={flipCard}>
        <div className='card-inner'>
          <div className='card-front'></div>
          <div className='card-back'>{value}</div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className='container'>
      <section className='cards-container'>
        <div className='cards'>
          {cardsList}
        </div>
      </section>
    </div>
  );
}

export default App;
