const createMenu = (objeto) => {
  const menu = { fetchMenu: () => objeto,
    consumption: [],
    order: (elemento) => { menu.consumption.push(elemento); },
    pay: () => {
      let total = 0;
      const conta = { ...menu.fetchMenu().food, ...menu.fetchMenu().drinks };
      let comanda = menu.consumption;
      for (let i = 0; i < comanda.length; i += 1) {
        total += conta[comanda[i]];
      }
    return Number(parseFloat(total * 1.1).toPrecision(4));
    },
  };
  return menu;
};

module.exports = createMenu;
