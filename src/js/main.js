// Explained Closure

var addTo = function(passed) {
    var inner = 2;
    return passed + inner;
};

console.log('Closure: ' + addTo(3));



// Javascript call apply and bind

var obj1 = {num: 5};
var obj2 = {num: 10};
var obj3 = {num: 2};

var addToThis = function(a, b, c) {
    return this.num + a + b + c;
};

// addToThis.call(obj, 10);
// console.log(addToThis.call(obj, 5, 4, 3));
var arr = [2, 3, 4, 5];
var add1 = addToThis.call(obj1, 5, 4, 3);
var add2 = addToThis.apply(obj2, arr);
var add3 = addToThis.bind(obj3);

console.dir(add3);

$('.call').text(add1);
$('.apply').text(add2);
$('.bind').text(add3(2,3,5));

// Call, apply, bind explained

// var obj = {num: 2};
//
// var functionName = function(arg1, arg2, arg3) {
//     return this.num + arg1 + arg2 + arg3;
// };
// //call
// functionName.call(obj, arg1, arg2, arg3);
// //apply
// functionName.apply(obj, [arg1, arg2, arg3]);
// //bind
// var bound = functionName.bind(obj)
// bound(arg1, arg2, arg3);