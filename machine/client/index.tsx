import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './app';

const domRootHook = document.getElementById('app');
if (domRootHook == null) {
  throw Error(
    "React was unable to bind into the dom. Please " +
    "contact the developer team to resolve this issue.");
}

createRoot(domRootHook).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
