// import react & react-router components for later
import React from 'react';
import { createRoot } from 'react-dom/client';

// import top-level App component
import App from './containers/App.js';

// import CSS file to render on web app
import styles from './styles.scss';

const container = document.getElementById('root');
const reactRoot = createRoot(container);

reactRoot.render(
    <App />
);