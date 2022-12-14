import copy from 'clipboard-copy';

export const embedVideo = (urlYoutube) => {
  const limit = -1;
  const embed = 'https://www.youtube.com/embed/';
  return `${embed}${urlYoutube.split('=', limit)[1]}`;
};

export const shareRecipe = (location) => {
  copy(`http://localhost:3000${location}`);
};

export const getRecipeIngredients = (recipe) => {
  const totalOfIngredients = 21;
  const ingredients = [];
  for (let index = 1; index < totalOfIngredients; index += 1) {
    const ingredient = `strIngredient${index}`;
    const measure = `strMeasure${index}`;
    ingredients.push(`${recipe[ingredient]} ${recipe[measure]}`);
  }
  return ingredients;
};

export const createFavorite = (type, recipesDetails) => {
  if (type.includes('meal')) {
    const newFavorite = {
      id: recipesDetails.idMeal,
      type,
      nationality: recipesDetails.strArea,
      category: recipesDetails.strCategory,
      alcoholicOrNot: '',
      name: recipesDetails.strMeal,
      image: recipesDetails.strMealThumb,
    };
    return newFavorite;
  }
  const newFavorite = {
    id: recipesDetails.idDrink,
    type,
    nationality: '',
    category: recipesDetails.strCategory,
    alcoholicOrNot: recipesDetails.strAlcoholic,
    name: recipesDetails.strDrink,
    image: recipesDetails.strDrinkThumb,
  };
  return newFavorite;
};

const checkIfIsFavorite = (recipes, currentId) => {
  const isFavorite = recipes.some((e) => e.id === currentId);
  return isFavorite;
};

export const saveFavorite = (recipesDetails, type, currentId) => {
  const actualFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  if (checkIfIsFavorite(actualFavorites, currentId)) {
    const removeFromFavorite = actualFavorites.filter((e) => e.id !== currentId);
    localStorage
      .setItem('favoriteRecipes', JSON.stringify(removeFromFavorite));
    return false;
  }
  const newFavorite = createFavorite(type, recipesDetails);
  localStorage
    .setItem('favoriteRecipes', JSON.stringify([...actualFavorites, newFavorite]));
  return true;
};

export const getDate = () => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

export const createNewDone = (type, recipesDetails) => {
  if (type.includes('meal')) {
    const newDone = {
      id: recipesDetails.idMeal,
      type,
      nationality: recipesDetails.strArea,
      category: recipesDetails.strCategory,
      alcoholicOrNot: '',
      name: recipesDetails.strMeal,
      image: recipesDetails.strMealThumb,
      doneDate: getDate(),
      tags: recipesDetails.strTags === null ? [] : (recipesDetails.strTags).split(','),
    };
    return newDone;
  }
  const newDone = {
    id: recipesDetails.idDrink,
    type,
    nationality: '',
    category: recipesDetails.strCategory,
    alcoholicOrNot: recipesDetails.strAlcoholic,
    name: recipesDetails.strDrink,
    image: recipesDetails.strDrinkThumb,
    doneDate: getDate(),
    tags: recipesDetails.strTags === null ? [] : (recipesDetails.strTags).split(','),
  };
  return newDone;
};

export const manageDoneRecipes = (recipesDetails, type) => {
  const actualDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const newDone = createNewDone(recipesDetails, type);
  localStorage
    .setItem('doneRecipes', JSON.stringify([...actualDoneRecipes, newDone]));
};
