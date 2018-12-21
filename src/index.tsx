import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Hello } from './components/Hello';
import { App } from './components/App';

const B = () => (
    <App />
    <Hello compiler="typescirpt" />
)

ReactDom.render(
  <B />,
  document.getElementById('root')
);

