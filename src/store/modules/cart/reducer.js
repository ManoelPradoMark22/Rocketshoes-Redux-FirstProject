export default function cart(state = [], action) {
  /* console.log(state);
  state é o estado anterior
  console.log('teste');
  console.log(action); */
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
