import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {browserHistory, Router} from 'react-router'

import appRoutes from './routing/routes'

const renderApp = (appRoutes) => {
    render(
        <AppContainer>
            <Router history={browserHistory} key={Math.random()}>
                {appRoutes}
            </Router>
        </AppContainer>,
        document.getElementById('root'),
    )
}

renderApp(appRoutes)

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./routing/routes', () => {
        const newRoutes = require('./routing/routes').default;
        renderApp(newRoutes)
    })
}
