import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {browserHistory, Router} from 'react-router'

import appRoutes from './routes'

const renderApp = (appRoutes) => {
    render(
        <AppContainer>
            <Router history={browserHistory}>
                {appRoutes}
            </Router>
        </AppContainer>,
        document.getElementById('root'),
    )
}

renderApp(appRoutes)

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./routes', () => {
        const newRoutes = require('./routes').default;
        renderApp(newRoutes)
    })
}
