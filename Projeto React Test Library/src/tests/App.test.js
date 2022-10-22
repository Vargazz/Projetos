import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('requisito 1', () => {
  test('Teste se redireciona para a pagina, ao clicar no link Home', () => {
    renderWithRouter(<App />);
    const title = screen.getByText(/Home/i);

    expect(title).toBeInTheDocument();
  });

  test('Teste se redireciona para a pagina, ao clicar no link About', () => {
    renderWithRouter(<App />);
    const title = screen.getByText(/About/i);

    expect(title).toBeInTheDocument();
  });
  test('Teste se redireciona para a pagina, ao clicar no link Favorites', () => {
    renderWithRouter(<App />);
    const title = screen.getByText(/Favorite/i);

    expect(title).toBeInTheDocument();
  });

  test('Teste se renderiza a pagina notfound', () => {
    const { history, container } = renderWithRouter(<App />);
    const title = '/NotFound';
    history.push(title);

    expect(container.innerHTML).toMatch(/Not Found/i);
  });
});
