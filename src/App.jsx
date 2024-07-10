import React, { useCallback, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = useState(0)

  return (
    <div className='app-component'>
      <Header score={score} />
      <Cards score={score} setScore={setScore} />
      <Footer />
    </div>
  );
}

export default App;
