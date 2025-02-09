import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Wraps the whole app so everything will have access to redux's store
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();