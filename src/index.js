import React from 'react';
import ReactDOM from 'react-dom/client';

// App component:
import App from './App';

// Bootstrap Css File:
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Index Css File:
import './index.css';

// Aos Css File:
import 'aos/dist/aos.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);