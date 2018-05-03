import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import appRoutes from './routes'
import App from "./app";

const renderApp = (appRoutes) => {
    render(
        <AppContainer>
            <App/>
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
