/* ************************************ */
/*    This is a simple API to expand    */
/*   my interaction with localStorage   */
/* ************************************ */

const store = {};

/* ******* */
/*   get   */
/* ******* */

// Input: a key to search for in localStorage
// Output: a JS data structure (object, array, etc.)
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

export default store;
