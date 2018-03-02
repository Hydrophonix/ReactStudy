const arr = [1, [2, 3, [4, 5], [2, 4]], 3, [[2, [3, [1]], 4], [3]]];

function toFlat(arr) {
  return arr.toString().split(',').map(item => +item);
};

function flatRecursive(arr) {
  let newArr = [];
  function arrPush(arr) {
    arr.map(item => Array.isArray(item) ? arrPush(item) : newArr.push(item));
  };
  arrPush(arr);
  return newArr;
};

function flatRecursive2(arr) {
  return (Array.isArray(arr)) ? arr.reduce((a, b) => a.concat(flatRecursive2(b)), []) : arr
};

// console.log(toFlat(arr));
// console.log(flatRecursive(arr));
// console.log(flatRecursive2(arr));

const obj1 = { user_name: 'shar', is_logged_in: true };
const obj2 = { 'user NAME': 'shar', TYPE: true };
const obj3 = { all_users: [{ user_name: 'shar', info: { full_description: '42' } }] };
const obj4 = { all_users: [{ user_name: 'shar', info: { full_description: '42' } }] };
// console.log(obj4);

function toCamelCase(obj) {
  Object.keys(obj).forEach(key => {
      const newKey = key.toLowerCase().split(/_|\s/).reduce((str, item, i) =>
        i === 0 ? `${str}${item}` : `${str}${item.charAt(0).toUpperCase()}${item.slice(1)}`, '');
      obj[newKey] = obj[key];

      if (Array.isArray(obj[newKey])) {
        obj[newKey].map(item => toCamelCase(item))
      } else if (obj[newKey] instanceof Object) {
        toCamelCase(obj[newKey]);
      }

      // delete obj[key];
    })
  };


// toCamelCase(obj1);
// console.log(obj1);
// toCamelCase(obj2);
// console.log(obj2);
toCamelCase(obj3);
console.log(obj3);
