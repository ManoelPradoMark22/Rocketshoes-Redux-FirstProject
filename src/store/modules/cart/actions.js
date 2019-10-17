/* vamos pegar somente o id, pq quem vai pegar as infos completas é
a middleware do saga.
AGR q iremos usar saga, precisamos criar duas actions add Cart:
addToCartRequest e addToCartSuccess. Antes era apenas:
export function addToCart(id) {
  return {
    type: '@cart/ADD',
    product,
  };
} */

/* ao clicar em Adicionar ao carrinho, a action vai ser ouvida APENAS pelo saga,
não mais pelo reducer */
export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

/* Qnd o saga finalizar a chamada API e der td certo, ai chama essa action Success
e esta sim será recebida pelo reducer q irá adicionar as infos no carrinho */
export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
