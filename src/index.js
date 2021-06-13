import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { App } from './component/app';

const app = <App />;

const here = document.getElementById('here');
render(app, here);
