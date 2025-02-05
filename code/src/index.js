import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './components/Loading.css';
import './components/MovieDetails.css';
import './components/MovieList.css';
import './components/Footer.css';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
