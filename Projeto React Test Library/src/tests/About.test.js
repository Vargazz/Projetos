import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from './renderWithRouter';

describe('requisito 2', () => {
  test('se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const infos = screen.getByText(/This application simulates a Pokédex, a digital/gi);
    expect(infos).toBeInTheDocument();
  });

  test('Teste se a pagina contem as informações da pokedex', () => {
    renderWithRouter(<About />);
    const texto = screen.getByRole('heading', {
      name: /About Pokédex/i, level: 2 });
    expect(texto);
  });
  test('Teste se a pagina contem dois paragrafos com o texto da pokedex', () => {
    renderWithRouter(<About />);
    const primeiroParagrafo = screen.getByText(/simulates a Pokédex/i);
    const segundoParagrafo = screen.getByText(/One can filter Pokémons by type/i);

    expect(primeiroParagrafo).toBeInTheDocument();
    expect(segundoParagrafo).toBeInTheDocument();
  });
  test('Teste se a pagina contem imagens da pokedex', () => {
    renderWithRouter(<About />);
    const img = screen.getByAltText(/Pokédex/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
