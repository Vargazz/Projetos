const fetchItem = async (itemID) => {
  const api = `https://api.mercadolibre.com/items/${itemID}`;
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
