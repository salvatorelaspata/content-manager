// // ThemeProvider.js
// import React, { useState, useEffect } from "react";
// import ThemeContext, { initialThemeState } from "./ThemeContext";
interface ThemeProvider { }
const ThemeProvider: React.FC<ThemeProvider> = ({ children }) => {
    //   const [theme, setTheme] = useState(initialThemeState.theme);

    //   const localStorage = window.localStorage;

    //   useEffect(() => {
    //     const savedThemeLocal = localStorage.getItem("globalTheme");

    //     if (!!savedThemeLocal) {
    //       setTheme(savedThemeLocal);
    //     }
    //   }, []);

    //   useEffect(() => {
    //     localStorage.setItem("globalTheme", theme);
    //   }, [theme]);

    //   return (
    //     <ThemeContext.Provider value={{ theme, setTheme }}>
    //       <div className={`theme--${theme}`}>
    //         {children}
    //       </div>
    //     </ThemeContext.Provider>
    //   );
    return (<div>ciao</div>)
};

export default ThemeProvider;