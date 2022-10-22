const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('parametro nao declarado', () => {
    const und = handlerElephants();
    expect(und).toBeUndefined();
  });

  it('retorna a quantidade de elefantes', () => {
    const count = handlerElephants('count');
    expect(count).toBe(4);
  });

  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    const name = handlerElephants('names');
    expect(name).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('retorna a média de idade dos elefantes', () => {
    const Age = handlerElephants('averageAge');
    expect(Age).toBe(10.5);
  });

  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    const local = handlerElephants('location');
    expect(local).toMatch('NW');
  });

  it('retorna a popularidade dos elefantes', () => {
    const popu = handlerElephants('popularity');
    expect(popu).toBe(5);
  });

  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const dias = handlerElephants('availability');
    expect(dias).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Caso receba o parâmetro que não seja uma string retornar Parâmetro inválido, é necessário uma string.', () => {
    const noString = handlerElephants(6);
    expect(noString).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('String sem funcionalidade', () => {
    const noFunc = handlerElephants('banana');
    expect(noFunc).toBe(null);
  });
});
