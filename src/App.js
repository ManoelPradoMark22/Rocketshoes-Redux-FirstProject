import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; /* deixa o store da app disponivel
para todos os componentes */

import './config/ReactotronConfig'; // deve vir antes do import do store

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
