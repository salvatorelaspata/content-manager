import React from 'react';
import css from './Doc.module.css';

interface DocProp {}

const Doc: React.FC<DocProp> = () => {
  return (
    <div className={css.root}>
        Doc
    </div>
  );
};

export default Doc;
