import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {AppContainer} from 'react-hot-loader'
import appRoutes from './routes'

const renderApp = (appRoutes) => {
    render(
        <AppContainer>
            <Router>
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
