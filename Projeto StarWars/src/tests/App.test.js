import React from "react";
import { screen, render } from "@testing-library/react";
import App from '../App'
// import mock from './mock';
import userEvent from "@testing-library/user-event";


it('Testa Titulo da Pagina', () => {
  render(<App />);
  const linkElement = screen.getByText(/StarWars Project/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Testa se Renderiza os Filtros', () => {
  it('Filtros',async () => {
    render(<App />);

    const inputName = screen.getByTestId('name-filter')
    expect(inputName).toBeInTheDocument()
    userEvent.type(inputName, 'Tatoo')

    const column = screen.getByTestId('column-filter')
    expect(column).toBeInTheDocument()
    userEvent.selectOptions(column, 'diameter')

    const comparison = screen.getByTestId('comparison-filter')
    expect(comparison).toBeInTheDocument()
    userEvent.selectOptions(comparison, 'igual a')
   
    const value = screen.getByTestId('value-filter')
    expect(value).toBeInTheDocument()
    userEvent.type(value, '4900')

    const button = screen.getByTestId('button-filter')
    expect(button).toBeInTheDocument()
    userEvent.click(button)

  })
})
