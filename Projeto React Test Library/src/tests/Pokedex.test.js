import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('Requisito 5', () => {
  test('Teste se a página contém um título', () => {
    renderWithRouter(<App />);

    const titlePokedex = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });

    expect(titlePokedex).toBeInTheDocument();
  });

  test('Teste se o botão de "Proxímo pokémon" está funcionando', () => {
    renderWithRouter(<App />);

    const buttonNextPokedex = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });

    expect(buttonNextPokedex).toBeInTheDocument();
    userEvent.click(buttonNextPokedex);
    const charmander = screen.getByText(/charmander/i);

    expect(charmander).toBeInTheDocument();
    userEvent.click(buttonNextPokedex);
    const caterpie = screen.getByText(/caterpie/i);

    expect(caterpie).toBeInTheDocument();

    userEvent.click(buttonNextPokedex);
    userEvent.click(buttonNextPokedex);
    userEvent.click(buttonNextPokedex);
    userEvent.click(buttonNextPokedex);
    userEvent.click(buttonNextPokedex);
    userEvent.click(buttonNextPokedex);
    userEvent.click(buttonNextPokedex);
    const pikachu = screen.getByText(/pikachu/i);

    expect(pikachu).toBeInTheDocument();
  });

  test('Teste se só aparece um pokémon por vez', () => {
    renderWithRouter(<App />);

    const buttonNextPokedex = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });
    userEvent.click(buttonNextPokedex);
    const moreDetailsLink = screen.queryAllByRole('link', {
      name: /more details/i,
    });

    expect(moreDetailsLink.length).toEqual(1);
  });

  test('Teste os botões de filtro da Pokedéx', () => {
    renderWithRouter(<App />);

    const tiposPokemon = ['Electric', 'Fire', 'Bug',
      'Poison', 'Psychic', 'Normal', 'Dragon'];
    const filterPokedex = screen.getAllByTestId('pokemon-type-button');

    filterPokedex.forEach(
      (filter, i) => expect(filter).toHaveTextContent(tiposPokemon[i]),
    );

    userEvent.click(filterPokedex[1]);
    const pokemonScreenType = screen.getByTestId(/pokemon-name/i);
    const allButton = screen.getByRole('button', {
      name: /All/i,
    });

    expect(pokemonScreenType).toHaveTextContent(/charmander/i);
    expect(allButton).toBeInTheDocument();
  });

  test('Teste o botão all', () => {
    renderWithRouter(<App />);

    const allButton = screen.getByRole('button', {
      name: /All/i,
    });
    userEvent.click(allButton);

    expect(allButton).toBeInTheDocument();
  });
});
