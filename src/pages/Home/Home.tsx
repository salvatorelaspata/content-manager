import React from 'react';
import css from './Home.module.css';

interface HomeProp {}

const Home: React.FC<HomeProp> = () => {
  return (
    <div className={css.root}>
        Home
    </div>
  );
};

export default Home;
