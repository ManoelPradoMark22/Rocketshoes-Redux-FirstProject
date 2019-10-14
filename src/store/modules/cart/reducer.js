import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1; // adiciona 1 na qnt
        } else {
          draft.push({
            // cria o produto no carrinho
            ...action.product,
            amount: 1,
          });
        }
      });
    default:
      return state;
  }
}
