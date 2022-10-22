const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(getCharacter()).toBeUndefined();
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
    expect(getCharacter('Arya')).toEqual(getCharacter('Arya'));
    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    expect(getCharacter('Brienne')).toEqual(getCharacter('Brienne'));
    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    expect(getCharacter('Melissandre')).toEqual(getCharacter('Melissandre'));
    // Teste se o parâmetro não é Case Sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele.
    expect(getCharacter('arya')).toEqual(getCharacter('Arya'));
    expect(getCharacter('brienne')).toEqual(getCharacter('Brienne'));
    expect(getCharacter('melissandre')).toEqual(getCharacter('Melissandre'));
    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
    expect(getCharacter('Guilherme')).toBeUndefined();

  });
});
