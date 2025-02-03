import React from 'react';
import RouteConfig from './configs/routerConfig';
import {Provider} from 'react-redux';
import store from './store/store';

const App = () => {
    return (
        <Provider store={store}>
        <RouteConfig />
        </Provider>
    );
};

export default App;
