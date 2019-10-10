import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis de Caminhada Leve, Confortável</strong>
        <span>R$69,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Adidas Falcon</strong>
        <span>R$169,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-libert-unissex/06/D22-2827-006/D22-2827-006_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Olympikus Libert</strong>
        <span>R$99,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Nike Revolution 5</strong>
        <span>R$279,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/02/HZM-1276-002/HZM-1276-002_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Nike Downshifter 9</strong>
        <span>R$159,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/14/COL-6981-014/COL-6981-014_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Adidas Run Falcon</strong>
        <span>R$169,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 5
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
