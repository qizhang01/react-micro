import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import RouteMaps from './routes'

export const RenderRoutes = (routes, authed) => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {RouteMaps.map(route => {
                        const { path, component, name } = route
                        return <Route key={name} path={path} component={component} />
                    })}
                </Switch>
            </Suspense>
        </Router>
    )
}
