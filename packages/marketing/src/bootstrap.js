import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

const mount = (el) => {
  const history = createMemoryHistory();
  ReactDom.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
