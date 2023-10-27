import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { HooksApp } from './HooksApp';
//import { CounterApp } from './CounterApp';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>
);