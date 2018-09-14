import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import Car from './Car';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Car />, document.getElementById('root'));
registerServiceWorker();