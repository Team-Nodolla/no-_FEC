/* ************************************ */
/*    This is a simple API to expand    */
/*   my interaction with localStorage   */
/* ************************************ */

const store = {};

/* ******** */
/*   save   */
/* ******** */

// Input: a unique key and a value to save to the localStorage.
// The input is stringifyed to be parsed on a get.
// Output: N/A
store.save = (key, value) => {
  if (!store.has(key)) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    console.error('An item with this key already exists in localStorage.\n'
    + 'If you would like to update the item with this key, use store.update()');
  }
};

/* ******* */
/*   get   */
/* ******* */

// Input: a key to search for in localStorage
// Output: A value stored with this key as its index
store.get = (key) => (
  JSON.parse(localStorage.getItem(key))
);

/* ********** */
/*   getAll   */
/* ********** */

// Input: N/A
// Output: An array containing all data currently stored in localStorage
store.getAll = () => {
  const { length, ...relevantData } = localStorage;
  const dataToReturn = [];
  const keys = Object.keys(relevantData);

  keys.forEach((key) => {
    dataToReturn.push(store.get(key));
  });

  return dataToReturn;
};

/* ******* */
/*   has   */
/* ******* */

// Input: a key to search for in localStorage
// Output: true if an item with this key exists, false if not
store.has = (key) => {
  if (store.get(key)) {
    return true;
  }
  return false;
};

/* ********** */
/*   delete   */
/* ********** */

// Input: a key for an item to delete from localStorage
// Output: returns the value of the deleted item
store.delete = (key) => {
  const toRemove = store.get(key);
  localStorage.removeItem(key);
  return toRemove;
};

/* ************* */
/*   deleteAll   */
/* ************* */

// Input: N/A
// Output: N/A
store.deleteAll = () => {
  localStorage.clear();
};

/* ******** */
/*   size   */
/* ******** */

// Input: N/A
// Output: The number of items stored in localStorage
store.size = () => (
  localStorage.length
);

/* ******** */
/*   size   */
/* ******** */

// Input: N/A
// Output: The number of items stored in localStorage
store.update = (key, value) => {
  if (store.has(key)) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    console.error('There is no item with this key in localStorage.\n'
    + 'If you would like to save new item, use store.save()');
  }
};

export default store;
