import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { backgrounds } from 'polished';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

/* actions.js temn mais de um export, por isso usamos o * as CartActions
basta usar CartActions. e selecionar qual funcao de actions.js vc quer usar */
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            {/* <span>{formatPrice(product.price)}</span>
          poderiamos usar diretamente assim, mas acontece que sempre que
          carregase a aplicacao (qnd o render() fosse chamado) iria executar
          essa funçao junto consigo para todos os preços, entao é melhor usá-la
          qnd carregarmos as infos da api (componentDidMount()) */}
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />{' '}
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    /* estamos criando um objeto amount com a key product.id e com o valor
    product.amount */
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

/* converte actions do redux em propriedades do nosso componente
assim  */
/* Ao conectarmos o componente com o redux atravez do connect, temos acesso
    a uma propriedade chamada dispatch atraves do this.props. Ao fazer o
    dispatch, todos os reducers sao ativados, já que eles escutam todas as actions,
    por isso que dentro de cada reducer deve ter um switch para fazer esse tratamento
    para q cada reducer possa executar apenas algumas actions especificas */
/* o dispatch dispara as actions do redux */
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
