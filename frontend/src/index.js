import React from 'react';
import ReactDOM  from 'react-dom/client';
import { BiLogoChrome } from 'react-icons/bi';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
</React.StrictMode>
)

 
