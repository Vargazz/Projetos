const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Argumento vazio', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('zoo fechado na Segunda', () => {
    const monday = getOpeningHours('Monday', '09:00-AM');
    expect(monday).toBe('The zoo is closed');
  });

  it('Zoo Aberto Terça', () => {
    const tuesday = getOpeningHours('Tuesday', '09:00-AM');
    expect(tuesday).toBe('The zoo is open');
  });

  it('Zoo fechado Quarta', () => {
    const wednesday = getOpeningHours('Wednesday', '09:00-PM');
    expect(wednesday).toBe('The zoo is closed');
  });

  it('Dia digitado errado', () => {
    expect(() => { getOpeningHours('Thu', '09:00-PM'); }).toThrow('The day must be valid. Example: Monday');
  });

  it('Horario forma errada', () => {
    expect(() => { getOpeningHours('Saturday', '09:00-ZM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Somente numeros nos horarios', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow('The hour should represent a number');
  });

  it('', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrow('The minutes should represent a number');
  });

  it('numeros aceitos 0 a 12 em horas', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow('The hour must be between 0 and 12');
  });

  it('numeros aceitos de 0 a 59 em minutos', () => {
    expect(() => { getOpeningHours('Monday', '09:60-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
});
