const [a, b, ...rest]
    = ['c#', 'javascript', 'python', 'react'];
console.log(a);
console.log(b);
console.log(rest);

const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = [...arr1, ...['g','b','f']];
console.log(arr4);