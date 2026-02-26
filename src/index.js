import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import { store } from './store.js';
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
