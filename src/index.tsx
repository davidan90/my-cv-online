import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nProvider } from './providers';
import { App } from './app';

ReactDOM.render(
    <I18nProvider>
        <App />
    </I18nProvider>,
    document.getElementById('dan-app')
);
