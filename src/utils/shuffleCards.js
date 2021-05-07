const shuffleCards = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
};

export default shuffleCards;
