import { BrowserRouter as Router, Switch, Route, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from './config/constants';
import css from './App.module.css'
import { HeaderToolbar } from './components';
import { IRoute } from './interfaces/navigation';
function App() {


    // console.log(flatten(ROUTES))
    // const flatten = (items: IRoute[]) => {
    //     const flat: IRoute[] = [];

    //     items && items.forEach(item => {
    //         flat.push(item)
    //         if (Array.isArray(item.subRoute) && item.subRoute.length > 0) {
    //             flat.push(...flatten(item.subRoute));
    //             delete item.subRoute
    //         }
    //         delete item.subRoute
    //     });

    //     return flat;
    // }
    // console.log(flatten(ROUTES))
    return (
        <div className={css.root}>
            <Router>
                <main className={css.content}>
                    <HeaderToolbar />
                    <div className={css.appBarSpacer} />
                    <Switch>
                        {ROUTES.map((route) =>
                            <Route
                                key={route.id}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component {...props} {...route.props} />
                                )}
                            />
                        )}
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;
