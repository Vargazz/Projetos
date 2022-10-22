require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Se é uma função', () => {
    expect(typeof (fetchItem)).toEqual('function');
  });
  it('Chama fetch quando a função é chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('Utiliza o endpoint', () => {
    const api = 'https://api.mercadolibre.com/items/MLB1615760527'
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith(api);
  });
  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'))
  });
});
