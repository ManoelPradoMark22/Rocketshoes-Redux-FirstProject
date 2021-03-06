import {
  call,
  select /* busca informacoes no estado */,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects'; /* put dispara uma action */
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

/* o * é um generator. É um similar do async! Mas o generator
tem mais funcionalidades que o async ! por isso vamos utilizá-lo. Mais adiante,
neste arquivo, vai aparecer o similar do await */
/* Essa fç vai acessar a API, buscar as infos detalhadas do produto e
cadastrar dentro do carrinho */
function* addToCart({ id }) {
  /* procurar um produto no estado em que o id seja igual ao id do produto q
  estamos tentnado adicionar */
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    // console.tron.warn('ERRO: Limite de Stock atigindo!');
    toast.error('Quantidade solicitada fora do estoque!');
    return;
  }
  if (productExists) {
    // se cair aqui, altera somente o amount
    yield put(
      updateAmountSuccess(id, amount)
    ); /* aqui ja podemos dar o Sucess diretamente ao invés do Request
    pq já fizemos a verificacao de stock acima */
  } else {
    // caso contrário, adiciona no carrinho
    /* yield é o similar do await
    atenção, no reduxSaga nao podemos fazer o api.get() diretamente, precisamos
    fazer uns métodos auxiliares antes, como o call(), q é responsavel por
    chamar métodos q são assincronos e q retornam promisses dentro do JS
    Atenção: separe os parâmetros por vírgulas, pode passar varios param */
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    /* assim é a forma correta de se fazer! */
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora do estoque!');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

/* all é para cadastrar vários listeners
e como escutar a action? podemos usar alguns métodos como o takeLatest ou
takeEvery (vamos usar o takeLatest, pq ele vai pegar apenas a última action).
ex: takeLatest: se o usuario clicar duas vezes rapidamente, o saga discarta a
primeira chamada caso ela nao tenha terminado e executa apenas a ultima.
já o takeEvery vai fazer todas as chamadas, se clicar duas vezes no botao
rapidamente, vai adicionar 3 vezes no carrinho */
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
