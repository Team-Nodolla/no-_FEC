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

export default store;
