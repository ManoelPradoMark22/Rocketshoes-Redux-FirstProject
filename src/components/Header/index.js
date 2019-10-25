import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

/* se o cartSize mudar, ele já automaticamente renderiza o header novamente com
o novo valor! Quem faz isso é o redux */
export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      {/* o cart é um link, mas iremos declarar como link lá no styles */}
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
