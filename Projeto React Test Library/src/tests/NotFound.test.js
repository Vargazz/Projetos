import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { NotFound } from '../pages';

describe('Requisito 4', () => {
  test('Teste se a página contém um Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const texto = screen.getByRole('heading', {
      name: /Page requested not found/i, level: 2 });
    expect(texto).toBeInTheDocument();
  });

  test('Teste se a pagina contem imagens da pokedex', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByAltText(
      /Pikachu crying because the page requested was not found/i,
    );
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
