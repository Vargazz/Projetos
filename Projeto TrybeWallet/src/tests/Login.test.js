import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import App from '../App';

beforeEach(() => renderWithRouterAndRedux(<App />));

const { history } = renderWithRouterAndRedux(<App />);

const email = 'alguem@alguem.com';
const password = '123456789';

describe('Testa o Componente Login', () => {
  it('Testa se a pagina renderiza em "/"', () => {
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('Testa os inputs de Email e Senha', () => {
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Senha/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('Testa se o botao aciona somente quando Email e Senha Sao Validos', () => {
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Senha/i);
    const loginBtn = screen.getByRole('button', { name: /Entrar/i });

    const fakeEmail = 'OLA';
    const fakePassword = 'k';

    userEvent.type(emailInput, fakeEmail);
    userEvent.type(passwordInput, fakePassword);

    expect(loginBtn).toBeDisabled();

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);

    expect(loginBtn).toBeEnabled();
  });

  it('Testa se ao clicar no botao é redirecionado para /carteira', () => {
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Senha/i);
    const loginBtn = screen.getByRole('button', { name: /Entrar/i });

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);

    expect(loginBtn).toBeEnabled();

    userEvent.click(loginBtn);

    const addExpenseBtn = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(addExpenseBtn).toBeInTheDocument();
    expect(loginBtn).not.toBeInTheDocument();
  });
});
