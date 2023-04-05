import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';

import './styles/normalize.scss';
import './styles/global.scss';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
