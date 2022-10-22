const getSavedCartItems = () => {
  const get = localStorage.getItem('cartItems');
  return get;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
