import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { store } from './store';
import {Provider} from'react-redux';
import { HashRouter as Router } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />

      </Router>
    </Provider>
  </StrictMode>,
)
