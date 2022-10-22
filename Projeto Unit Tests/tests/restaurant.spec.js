const createMenu = require('../src/restaurant');
 
describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const menu = { food: {'coxinha': 3.90 ,'sopa':3.90, 'sashimi': 3.90}, drinks: {'agua': 3.90} }
    const objetoRetornado = createMenu(menu);

    // TESTE 1: Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.
    expect(typeof objetoRetornado.fetchMenu).toBe('function');
    // TESTE 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.

    expect(Object.keys(objetoRetornado.fetchMenu())).toEqual(['food', 'drinks']);

    // TESTE 3: Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'

    expect(objetoRetornado.fetchMenu()).toEqual(objetoRetornado.fetchMenu())

    // --------------------------------------------------------------------------------------

    // TESTE 4: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    expect(objetoRetornado.consumption).toEqual([]);

    // --------------------------------------------------------------------------------------

    // TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado,
    // passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada
    // ao array retornado em `objetoRetornado.consumption`.
 
    objetoRetornado.order('coxinha')
    expect(objetoRetornado.consumption).toEqual(['coxinha']);

    // --------------------------------------------------------------------------------------

    // TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
    
    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");
    expect(objetoRetornado.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi']);

    // --------------------------------------------------------------------------------------

    // TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.
    
    objetoRetornado.order('coxinha');
    expect(objetoRetornado.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi', 'coxinha'])
    
    // --------------------------------------------------------------------------------------

    // TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
  
    expect(objetoRetornado.pay()).toBe(21.45);
  
  });
});
