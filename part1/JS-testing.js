// [let] defines a normal variable, as usual
// [const] defines a 'constant' for which the value can no longer be changed
// [const] can be basically use to define constant varibles or used with '=> {}' to define functions for examle 
// [const] cannot be reassigned like 'y' which was defined with let below!!! y was changed from int to other int to string
// [var] is also a way to define variables but for my work rn it is not advised to use, also overall not advised it is legacy/outdated

const x = 10
let y = 5

console.log(x, y)
y += 10 // classic, same as python --> y = y + 10 (y is 5) = [15]

console.log(y)

z = 'text'

console.log(z, y)

y = 'reassigned from int to string'

console.log(z, y)

// -------------------------------------

const t = [1, -1, 0, 5]
console.log(t)
t.push(161)
console.log(t)
// good to know here I created the array with const which might imply that the array is no longer changable/updateble
// however that is not the case since an array is an object and defining an object with const just makes its adress constant
// this means that the address/reference to the existing array remains the same forever but its contants may change

// when doing e.g. const x = 1 this is not an object but a primitive, value is stored directly in the variable
// not the case of object being stored in the variable creating a permanent adress and within that objects changes can be made (that would be theh case of const x = [1] ...)
