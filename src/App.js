import React from 'react';
import CardsList from './components/CardsList';
import './App.scss';

const App = () => {
  return (
    <div className='container'>
      <section className='cards-container'>
        <CardsList />
      </section>
    </div>
  );
}

export default App;
