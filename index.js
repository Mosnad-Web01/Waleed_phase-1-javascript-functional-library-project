// Import helper functions (if any)
// ... (replace with your helper function imports)

// Define your functional library functions here
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (typeof collection === "object") {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        callback(collection[key], key, collection);
      }
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else if (typeof collection === "object") {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        result.push(callback(collection[key], key, collection));
      }
    }
  }
  return result;
}

function myReduce(collection, callback, initialValue) {
  let accumulator = initialValue;
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (accumulator === undefined && i === 0) {
        accumulator = collection[i];
      } else {
        accumulator = callback(accumulator, collection[i], i, collection);
      }
    }
  } else if (typeof collection === "object") {
    let hasInitialValue = false;
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        if (!hasInitialValue && initialValue === undefined) {
          accumulator = collection[key];
          hasInitialValue = true;
        } else {
          accumulator = callback(accumulator, collection[key], key, collection);
        }
      }
    }
  }
  return accumulator;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else if (typeof collection === "object") {
    for (const key in collection) {
      if (
        Object.prototype.hasOwnProperty.call(collection, key) &&
        predicate(collection[key], key, collection)
      ) {
        return collection[key];
      }
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else if (typeof collection === "object") {
    for (const key in collection) {
      if (
        Object.prototype.hasOwnProperty.call(collection, key) &&
        predicate(collection[key], key, collection)
      ) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === "object") {
    return Object.keys(collection).length;
  }
  return 0;
}

function myFirst(collection, n) {
  if (Array.isArray(collection)) {
    return n ? collection.slice(0, n) : collection[0];
  }
  return undefined;
}

function myLast(collection, n) {
  if (Array.isArray(collection)) {
    return n ? collection.slice(-n) : collection[collection.length - 1];
  }
  return undefined;
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

// Export your functions
module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues,
};
