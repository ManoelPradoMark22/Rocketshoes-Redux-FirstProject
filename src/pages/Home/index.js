import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

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
    const { dispatch } = this.props;

    /* Ao conectarmos o componente com o redux atravez do connect, temos acesso
    a uma propriedade chamada dispatch atraves do this.props. Ao fazer o
    dispatch, todos os reducers sao ativados, já que eles escutam todas as actions,
    por isso que dentro de cada reducer deve ter um switch para fazer esse tratamento
    para q cada reducer possa executar apenas algumas actions especificas */
    dispatch({
      /* o dispatch dispara as actions do redux */
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

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
                <MdAddShoppingCart size={16} color="#fff" /> 5
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);
