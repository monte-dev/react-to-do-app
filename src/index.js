import { createRoot } from 'react-dom/client';
import App from './App';
import 'font-awesome/css/font-awesome.min.css'

import './styles/normalize.scss';
import './styles/global.scss';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <App />,
);