// reduce() ek array method hai jo array ke sabhi elements pe sequentially operation karta hai aur ek single final value return karta hai — jaise sum, average, object transformation, grouping, etc.
// initially acc holds the current value we pass explicity

// Reduce is like a Swiss Army Knife of array methods — jab aapko array ko compress karna ho into 1 value, go with reduce().

const num = [1, 2, 3, 4]
const sum = num.reduce((acc, val) => acc + val, 0)
console.log(sum)