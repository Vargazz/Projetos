import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Requisito 3', () => {
  test('é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const notPokemons = screen.getByText(/No favorite pokemon found/i);
    expect(notPokemons).toBeInTheDocument();
  });
});
