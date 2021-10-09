import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from './config/constants';
import { HeaderToolbar } from './components';
import css from './App.module.css';
import { lazy, useState } from 'react';
// import DarkTheme from './DarkTheme.sass'
function App() {
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const toggleTheme = async () => {
        setDarkMode(!darkMode)
        debugger;
        darkMode &&
            fetch('DarkTheme.sass')
                .then(function (response) {
                    console.log(response)
                    return response.json();
                })
                .then(function (myJson) {
                    console.log(myJson);
                });
        // await import(`./DarkTheme.sass`)
    }
    return (
        <div className={css.root}>
            <Router>
                <main className={css.content}>
                    <HeaderToolbar toggleTheme={() => { }} />
                    <div className={css.appBarSpacer} />
                    <Switch>
                        {ROUTES.map(({ id,
                            path,
                            exact,
                            component: Component,
                            subRoute }) =>
                            !subRoute ?
                                <Route
                                    key={id}
                                    path={path}
                                    exact={exact}
                                >
                                    {<Component />}
                                </Route> :
                                <Route
                                    key={id}
                                    path={path}
                                >
                                    <Switch key={id}>
                                        {subRoute.map(({ id: sId,
                                            path: sPath,
                                            component: SComponent }) =>
                                            <Route
                                                key={sId}
                                                path={sPath}
                                            >
                                                {<SComponent />}
                                            </Route>)}
                                    </Switch>
                                </Route>
                        )}
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;
