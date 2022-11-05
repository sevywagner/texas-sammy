import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SidebarContextProvider } from './Components/Context/sidebar-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarContextProvider>
  </React.StrictMode>
);

