import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Hello } from './components/Hello';
import { App } from './components/App';

const B = () => (
  <div>
    <App />
    <Hello compiler="typescirpt" />
  </div>
)

ReactDom.render(
  <B />,
  document.getElementById('root')
);

