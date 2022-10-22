const sectionItem = document.querySelector('.items');
const cartItem = document.querySelector('.cart__items');
const emptyBtn = document.querySelector('.empty-cart');
const totalPrice = document.querySelector('.total-price');
const cart = document.querySelector('.material-icons');

const loadingText = () => {
  const div = document.createElement('div');
  div.innerText = 'carregando...';
  div.className = 'loading';
  sectionItem.appendChild(div);
};
const loadingRemove = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const salvaItem = async (element) => {
  const valorSalvo = await saveCartItems(element);
  return valorSalvo; 
};
const pegaItem = async () => {
  cartItem.innerHTML = getSavedCartItems();
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const sum = () => {
  const item = document.querySelectorAll('.cart__item');
  let total = 0;
  item.forEach((element) => {
    total += Number(element.innerText.split('$')[1]);
  });

  totalPrice.innerText = `${total.toFixed(2)}`;
};

const cartItemClickListener = (event) => {
  const evento = event.target;
  const result = Number(evento.innerText.split('$')[1]);
  totalPrice.innerText = Number(totalPrice.innerText) - result;

  salvaItem(cartItem.innerHTML);
  sum();
};

cartItem.addEventListener('click', cartItemClickListener);

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createCartItemElement = ({ sku, name, salePrice, image }) => {
  const div = document.createElement('div');
  const li = document.createElement('ul');
  const img = document.createElement('img');
  const buttonRemove = createCustomElement('button', 'item__remove', 'X');

  div.className = 'cart__div';
  img.className = 'image__cart';
  img.src = image;
  li.className = 'cart__item';
  li.innerHTML = `SKU: ${sku} <br> NAME: ${name} <br> PRICE: $${salePrice}`;
  div.appendChild(img);
  div.appendChild(li);
  div.appendChild(buttonRemove);
  buttonRemove.addEventListener('click', () => {
    div.remove();
  });
  
  return div;
};
const cartAdd = async (event) => {
  const evento = event.target;
  const capturaID = evento.parentNode.firstChild.innerText;
  const data = await fetchItem(capturaID);
  const itensCart = {
    image: data.thumbnail,
    sku: data.id,
    name: data.title,
    salePrice: data.price,
  };
  cartItem.appendChild(createCartItemElement(itensCart));
  salvaItem(cartItem.innerHTML);
  sum();
};

const createProductItemElement = ({ sku, name, image, price }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', price));
  const buttonAdd = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');// Dica de um colega de classe
  section.appendChild(buttonAdd);
  buttonAdd.addEventListener('click', cartAdd);
  return section;
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const addItens = async () => {
  loadingText();
const data = await fetchProducts('computador');
const result = data.results;
result.map((element) => {
   const itens = {
     sku: element.id,
     name: element.title,
     image: element.thumbnail,
     price: `R$ ${element.price}`,
   };
  return sectionItem.appendChild(createProductItemElement(itens));
 });
 loadingRemove();
};

const cartNull = () => {
  cartItem.innerHTML = '';
  totalPrice.innerHTML = '0';
  salvaItem(cartItem.innerHTML);
};

emptyBtn.addEventListener('click', cartNull);

const aparecerCart = () => {
  const cartItems = document.querySelector('.cart');
  const cartTitle = document.querySelector('.container-cartTitle');
  const cartT = document.querySelector('.cart__title');

  if (cartItems.style.display === 'none' && cartTitle.style.display === 'none') {
    cartTitle.style.display = 'flex';
    cartItems.style.display = 'flex';
    cartT.style.display = 'flex';
  } else {
    cartTitle.style.display = 'none';
    cartItems.style.display = 'none';
    cartT.style.display = 'none';
  }
};
cart.addEventListener('click', aparecerCart);

window.onload = async () => {
  await addItens();
  pegaItem();
  sum();
};
