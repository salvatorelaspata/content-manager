import React from 'react';
import css from './NotFound.module.css';

interface NotFoundProp {}

const NotFound: React.FC<NotFoundProp> = () => {
  return (
    <div className={css.root}>
        NotFound
    </div>
  );
};

export default NotFound;
