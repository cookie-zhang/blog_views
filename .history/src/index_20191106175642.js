import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
