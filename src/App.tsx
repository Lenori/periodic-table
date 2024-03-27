import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import RouteManager from './routes';
import GlobalStyle from './styles/global';

import { ElementProvider } from 'context/ElementContext';

function App() {
    return (
        <BrowserRouter>
            <ElementProvider>
                <RouteManager />
                <GlobalStyle />
            </ElementProvider>
        </BrowserRouter>
    );
}

export default App;
