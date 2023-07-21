import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../pages/NavBar.css';

export default function Navbar() {
  const [user, setUser] = useState();

  const { pathname } = useLocation();

  const getLocalStorage = () => {
    const usersString = localStorage.getItem('user');
    const userObj = JSON.parse(usersString);
    return userObj;
  };

  const navigate = useNavigate();

  const navigatePage = ({ target: { value } }) => {
    if (value === 'products') {
      navigate('/customer/products');
    } else if (value === 'orders') {
      if (pathname.includes('customer')) {
        navigate('/customer/orders');
      } else if (pathname.includes('seller')) {
        navigate('/seller/orders');
      } else {
        navigate('/admin/manage');
      }
    } else {
      localStorage.clear();
      navigate('/login');
    }
  };

  useEffect(() => {
    setUser(getLocalStorage());
  }, []);

  return (
    <nav>
      <div className="nav-component">
        <div>
          {pathname.includes('customer') && (
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-products"
              className="button-products"
              value="products"
              onClick={ navigatePage }
            >
              PRODUTOS
            </button>
          )}
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            className="button-orders"
            value="orders"
            onClick={ navigatePage }
          >
            MEUS PEDIDOS
          </button>
        </div>
        <div className="div-user-logout">
          <button
            data-testid="customer_products__element-navbar-user-full-name"
            className="user-display"
            type="button"
          >
            {user?.name}
          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            className="button-logout"
            onClick={ navigatePage }
            value="logout"
          >
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
}
