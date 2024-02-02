import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import '@sibvisions/reactui/dist/main.css'
import App from './App';

/** Rendering the application */
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
export default root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);
