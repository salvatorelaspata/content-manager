import React from 'react';
import css from './ToDo.module.css';

interface ToDoProp {}

const ToDo: React.FC<ToDoProp> = () => {
  return (
    <div className={css.root}>
        ToDo
    </div>
  );
};

export default ToDo;
