import React from 'react';
import { Router } from 'react-router-dom'; /* trocamos de BrowserRouter
para apenas Router já q estamos usando o history e nele usamos o
createBrowserHistory. E abaixo qnd usarmos o Rounter como componente passemos
o history como propriedade! */
import { Provider } from 'react-redux'; /* deixa o store da app disponivel
para todos os componentes */
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig'; // deve vir antes do import do store

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
