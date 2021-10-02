import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom'
import React, { FC } from 'react'
import routes from './route'

const Navigation: FC<{}> = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component {...props} {...route.props} />
                                )}
                            />
                        )
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Navigation;