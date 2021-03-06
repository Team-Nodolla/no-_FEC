/* ************************************ */
/*    This is a simple API to expand    */
/*   my interaction with localStorage   */
/* ************************************ */

const subscribers = new Set();

/* ******* */
/*   get   */
/* ******* */

// Input: a key to search for in localStorage
// Output: A value stored with this key as its index or null.

// Description:
//              Searchs localStorage for an item with the supplied key as its index.
//              Returns the value of that item if it is found.
//              Returns null if no item with this key exists in localStorage
const get = (key) => (
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
const getAll = () => {
  const { length, ...relevantData } = localStorage;

  return Object.keys(relevantData).map((key) => (
    get(key)
  ));
};

/* ******* */
/*   has   */
/* ******* */

// Input: a key to search for in localStorage
// Output: boolean

// Description:
//              Searches localStorage for an item with the supplied key.
//              Returns true if it is found, otherwise returns false.
const has = (key) => {
  if (get(key)) {
    return true;
  }
  return false;
};

const subscribe = (cb) => {
  subscribers.add(cb);
};

const unsubscribe = (cb) => {
  subscribers.delete(cb);
};

const publish = (subs, state) => {
  subs.forEach((sub) => {
    sub(state);
  });
};

const doPublish = () => publish(subscribers, getAll());

/* ******** */
/*   save   */
/* ******** */

// Input: A unique key and a value to save to the localStorage.
// Output: N/A

// Description:
//              Saves a new item to localStorage with the supplied unique key
//              as its index and the value as its value.
//              The value is stringifyed to be parsed later by const get().
//              If an item with the supplied key already exists in localStorage, throws an error
//              and doesn't save the item.
const save = (key, value) => {
  if (!has(key)) {
    localStorage.setItem(key, JSON.stringify(value));
    doPublish();
  } else {
    console.error('An item with this key already exists in localStorage.\n'
      + 'If you would like to update the item with this key, use const update()');
  }
};

/* ********** */
/*   remove   */
/* ********** */

// Input: A key for an item to remove from localStorage
// Output: The value of the removed item or null

// Description:
//              removes an item in localStorage with the supplied key as its index.
//              Returns the value of the removed item, or null if no item with that key
//              exists in localStorage.
const remove = (key) => {
  const toRemove = get(key);
  localStorage.removeItem(key);
  doPublish();
  return toRemove;
};

/* ************* */
/*   removeAll   */
/* ************* */

// Input: N/A
// Output: N/A

// Description:
//              removes all data from localStorage.
const removeAll = () => {
  localStorage.clear();
  doPublish();
};

/* ******** */
/*   size   */
/* ******** */

// Input: N/A
// Output: The number of items stored in localStorage

// Description:
//              Returns the number of items stored in localStorage
const size = () => (
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
const update = (key, newValue) => {
  if (has(key)) {
    localStorage.setItem(key, JSON.stringify(newValue));
    doPublish();
  } else {
    console.error('There is no item with this key in localStorage.\n'
      + 'If you would like to save new item, use const save()');
  }
};

/* ********************** */
/*   bestHTTPStatusCode   */
/* ********************** */

// Input: N/A
// Output: The best HTTP status code

// Description:
//              Self Explainatory.
const bestHTTPStatusCode = () => (
  '418: I\'m a little teapot.'
);

export default {
  save,
  getAll,
  remove,
  removeAll,
  update,
  has,
  size,
  subscribe,
  unsubscribe,
  bestHTTPStatusCode,
};
