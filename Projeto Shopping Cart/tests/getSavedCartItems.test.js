const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se, ao executar getSavedCartItems, o metodo localStorage.getItem é chamado', ()=> {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledTime(1);
  })

  it('testa se "localStorage.getItem" é chamado com o parâmetro "cartItems" ao executar a função', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })
});
