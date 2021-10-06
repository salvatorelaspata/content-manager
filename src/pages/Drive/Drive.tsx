import React from 'react';
import css from './Drive.module.css';

interface DriveProp {}

const Drive: React.FC<DriveProp> = () => {
  return (
    <div className={css.root}>
        Drive
    </div>
  );
};

export default Drive;
