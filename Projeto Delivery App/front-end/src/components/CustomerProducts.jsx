import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../service/request';
import Context from '../context/Context';
import '../pages/Customer.css';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const { cart, handleIncrease, handleDecrease, handleChange } = useContext(Context);

  const getProducts = async () => {
    const apii = await api.get('/products');
    const result = apii.data;
    setProducts(result);
  };

  const navigate = useNavigate();

  const handleCartButton = () => {
    navigate('/customer/checkout');
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));

    if (Object.values(cart).some(({ quantity }) => quantity)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [cart]);

  return (
    <div className="products-page">
      {products.map(({ id, name, price, urlImage }, index) => (
        <div key={ index } className="product-card">
          <p
            data-testid={ `customer_products__element-card-price-${id}` }
            className="price"
          >
            {`R$${price.replace(/\./, ',')}`}
          </p>

          <div className="img-container">
            <img
              data-testid={ `customer_products__img-card-bg-image-${id}` }
              className="card-img"
              src={ urlImage }
              alt="Imagem da bebida"
              height="auto"
              width="8%"
            />
          </div>

          <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
          <div className="btns-container">
            <button
              data-testid={ `customer_products__button-card-add-item-${id}` }
              className="button-quantity"
              type="button"
              onClick={ () => handleIncrease(id, name, price) }
            >
              +
            </button>

            <input
              data-testid={ `customer_products__input-card-quantity-${id}` }
              className="input-quantity"
              onChange={ ({ target: { value } }) => handleChange(value, name, id, price) }
              value={ cart[id]?.quantity ?? 0 }
            />

            <button
              data-testid={ `customer_products__button-card-rm-item-${id}` }
              className="button-quantity"
              type="button"
              onClick={ () => handleDecrease(id, name, price) }
            >
              -
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ handleCartButton }
        disabled={ isDisabled }
        className="btn-cart"
      >
        <span data-testid="customer_products__checkout-bottom-value">
          {`Ver Carrinho: R$${Object.values(cart)
            .reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2).replace(/\./, ',')}`}
        </span>
      </button>
    </div>
  );
}
