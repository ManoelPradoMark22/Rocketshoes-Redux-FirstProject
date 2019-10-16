/* para juntar todas as sagas em um unico arquivo, basta adiona-las no array
dentro do all separados por vírgula */
import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSafa() {
  return yield all([cart]);
}
