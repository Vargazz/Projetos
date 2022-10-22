require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

    it('Se é uma função', () => {
      expect(typeof (fetchProducts)).toEqual('function');
    });
    it('Chama fetch quando a função é chamada', async () => {
      await fetchProducts('computador');
      expect(fetch).toHaveBeenCalledTimes(1);
    });
    it('Utiliza o endpoint', () => {
      const api = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
      fetchProducts('computador')
      expect(fetch).toHaveBeenCalledWith(api);
    });
    it('Teste se o retorno da função fetchProducts com o argumento -computador- é uma estrutura de dados igual ao objeto computadorSearch', async () => {
      expect(await fetchProducts('computador')).toEqual(computadorSearch);
    });
    it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro', async () => {
      expect(await fetchProducts()).toEqual(new Error('You must provide an url'))
    });
    
  })

