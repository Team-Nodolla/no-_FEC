/* ************************************ */
/*    This is a simple API to expand    */
/*   my interaction with localStorage   */
/* ************************************ */

const store = {};

/* ******** */
/*   save   */
/* ******** */

// Input: a key value pair to save to the localStorage.
// The input is stringifyed to be parsed on a get.
// Output: N/A
store.save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
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

export default store;
