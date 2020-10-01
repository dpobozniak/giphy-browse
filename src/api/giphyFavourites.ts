const storageKey = 'favourites';

/**
 * Gets favourites list
 */
export const getFavourites = ():string => window.localStorage.getItem(storageKey) || '';

/**
 * Adds specified GIF to favourites
 * @param {string} id Id of GIF that have to added to favourites
 */
export const addToFavourites = (id: string):void => {
  const currentValue = getFavourites();

  const currentArray = currentValue.split(',');
  const modifiedArray = [...currentArray, id];

  const modifiedValue = modifiedArray.join(',');

  window.localStorage.setItem(storageKey, modifiedValue);
};

/**
 * Removes specified GIF from favourites
 * @param {string} id Id of GIF that have to removed from favourites
 */
export const removeFromFavourites = (id: string):void => {
  const currentValue = getFavourites();

  const currentArray = currentValue.split(',');
  const modifiedArray = currentArray.filter((item) => item !== id);

  const modifiedValue = modifiedArray.join(',');

  window.localStorage.setItem(storageKey, modifiedValue);
};

/**
 * Check if specified GIF is added to favourites
 * @param {string} id Id of GIF that have to be checked
 */
export const checkIfFavourite = (id: string):boolean => {
  const currentValue = getFavourites();
  const currentArray = currentValue.split(',');
  
  return currentArray.includes(id);
};