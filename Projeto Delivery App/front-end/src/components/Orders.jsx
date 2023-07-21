import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../service/request';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [statusColor, setStatusColor] = useState('');

  const { pathname } = useLocation();

  let pageName;

  if (pathname.includes('customer')) {
    pageName = 'customer';
  } else {
    pageName = 'seller';
  }

  const DATA_TESTID_ID = `${pageName}_orders__element-order-id-`;
  const DATA_TESTID_STATUS = `${pageName}_orders__element-delivery-status-`;
  const DATA_TESTID_DATE = `${pageName}_orders__element-order-date-`;
  const DATA_TESTID_PRICE = `${pageName}_orders__element-card-price-`;

  console.log(orders.status);
  const alteraColor = async () => {
    orders.map((element) => {
      if (element.status === 'Pendente') {
        return setStatusColor('status-orders');
      } if (element.status === 'Em Trânsito') {
        return setStatusColor('status2-orders');
      } if (element.status === 'Entregue') {
        return setStatusColor('status3-orders');
      }
      return statusColor;
    });
  };

  useEffect(() => {
    const getOrders = async () => {
      if (pathname.includes('customer')) {
        const { data: users } = await api.get('/users');

        const user = users.find(({ email }) => email === JSON
          .parse(localStorage.getItem('user')).email);

        const { data } = await api.get(`/customer/orders/${user.id}`);

        setOrders(data);
      } else {
        const { data: users } = await api.get('/users');

        const user = users.find(({ email }) => email === JSON
          .parse(localStorage.getItem('user')).email);

        const { data } = await api.get(`/seller/orders/${user.id}`);

        setOrders(data);
      }
    };

    getOrders();
    alteraColor();
  }, [pathname]);

  return (
    <div className="div-pedidos">
      {orders.map(({
        id,
        saleDate,
        status,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
      }, index) => (
        <Link to={ `/${pageName}/orders/${id}` } key={ index } className="link">
          <div className="div-orders">
            <p data-testid={ DATA_TESTID_ID + id } className="id-orders">
              {id}
            </p>

            <p data-testid={ DATA_TESTID_STATUS + id } className={ statusColor }>
              {status}
            </p>
            <div>
              <p data-testid={ DATA_TESTID_DATE + id } className="date-value-orders">
                {new Date(saleDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
              </p>
              <p data-testid={ DATA_TESTID_PRICE + id } className="date-value-orders">
                {totalPrice.replace(/\./, ',')}
              </p>
              {pathname.includes('seller') && (
                <p data-testid={ `seller_orders__element-card-address-${id}` }>
                  {`${deliveryAddress}, ${deliveryNumber}`}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
