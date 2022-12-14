const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    // fail('Teste vazio!');
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('a')).toBe(undefined);
    // Teste se circle retorna um objeto.
    expect(typeof circle(2)).toEqual('object');
    // Teste se o objeto retornado possui 3 propriedades.
    expect(Object.keys(circle(2)).length).toBe(3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBe(undefined);
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
    expect(Object.values(circle(2))[2]).toBe(12.56);
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
    expect(Object.values(circle(3))[1]).toBe(28.259999999999998);
    // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
    expect(Object.values(circle(3))).toEqual([3 ,28.259999999999998 ,18.84 ])
  });
});
