/* ************************************ */
/*    This is a simple API to expand    */
/*   my interaction with localStorage   */
/* ************************************ */

const store = {};

/* ******** */
/*   save   */
/* ******** */

// Input: A unique key and a value to save to the localStorage.
// Output: N/A

// Description:
//              Saves a new item to localStorage with the supplied unique key
//              as its index and the value as its value.
//              The value is stringifyed to be parsed later by store.get().
//              If an item with the supplied key already exists in localStorage, throws an error
//              and doesn't save the item.
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
// Output: A value stored with this key as its index or null.

// Description:
//              Searchs localStorage for an item with the supplied key as its index.
//              Returns the value of that item if it is found.
//              Returns null if no item with this key exists in localStorage
store.get = (key) => (
  JSON.parse(localStorage.getItem(key))
);

/* ********** */
/*   getAll   */
/* ********** */

// Input: N/A
// Output: An array containing all data currently stored in localStorage.

// Description:
//              Retreives all items stored in localStorage as an array of objects.
//              Returns an empty array if no items are currently stored in localStorage.
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
// Output: boolean

// Description:
//              Searches localStorage for an item with the supplied key.
//              Returns true if it is found, otherwise returns false.
store.has = (key) => {
  if (store.get(key)) {
    return true;
  }
  return false;
};

/* ********** */
/*   delete   */
/* ********** */

// Input: A key for an item to delete from localStorage
// Output: The value of the deleted item or null

// Description:
//              Deletes an item in localStorage with the supplied key as its index.
//              Returns the value of the deleted item, or null if no item with that key
//              exists in localStorage.
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

// Description:
//              Deletes all data from localStorage.
store.deleteAll = () => {
  localStorage.clear();
};

/* ******** */
/*   size   */
/* ******** */

// Input: N/A
// Output: The number of items stored in localStorage

// Description:
//              Returns the number of items stored in localStorage
store.size = () => (
  localStorage.length
);

/* ********** */
/*   update   */
/* ********** */

// Input: a key that already exists in localStorage and a new value
// Output: N/A

// Description:
//              Updates an existing item with that has supplied key as its index
//              with a new value.
//              If no item with this key exists in localStorage, throws an error
//              and doesn't update the item.
store.update = (key, newValue) => {
  if (store.has(key)) {
    localStorage.setItem(key, JSON.stringify(newValue));
  } else {
    console.error('There is no item with this key in localStorage.\n'
    + 'If you would like to save new item, use store.save()');
  }
};

/* ********************** */
/*   bestHTTPStatusCode   */
/* ********************** */

// Input: N/A
// Output: The best HTTP status code

// Description:
//              Self Explainatory.
store.bestHTTPStatusCode = () => (
  '418: I\'m a little teapot.'
);

export default store;
