import React from 'react';
import css from './ProjecTile.module.css';

interface ProjecTileProp {}

const ProjecTile: React.FC<ProjecTileProp> = () => {
  return (
    <div className={css.root}>
        ProjecTile
    </div>
  );
};

export default ProjecTile;
