import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from './config/constants';
import { HeaderToolbar } from './components';
import css from './App.module.css';

function App() {
    return (
        <div className={css.root}>
            <Router>
                <main className={css.content}>
                    <HeaderToolbar />
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
