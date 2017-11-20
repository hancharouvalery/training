import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import { appStore } from './store';
import App from './components/root_component/app';

render(<Provider store={appStore}>
    <App />
</Provider>, document.querySelector('.container'));