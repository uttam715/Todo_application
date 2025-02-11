import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const entryPointOfApp=document.getElementById('root');
const root=createRoot(entryPointOfApp);
root.render(<App />)



