const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let soma = 0;
  let media = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    soma += array[i];
  }
  media = soma / array.length;
  return Math.round(media);
};

module.exports = average;
