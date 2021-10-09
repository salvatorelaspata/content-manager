import React from 'react';
import css from './ThemeContext.module.css';

interface ThemeContextProp {}

const ThemeContext: React.FC<ThemeContextProp> = () => {
  return (
    <div className={css.root}>
        ThemeContext
    </div>
  );
};

export default ThemeContext;
