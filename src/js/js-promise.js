// let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
//     let isClean = false;
//
//     if(isClean) {
//         resolve('Clean');
//     } else {
//         reject('Not Clean');
//     }
// });
//
// promiseToCleanTheRoom.then(function(fromResolve) {
//    console.log('the room is ' + fromResolve);
// }).catch(function(fromReject) {
//     console.log('the room is ' + fromReject);
// });

let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('Cleaned the Room');
    });
};

let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' Removed Garbage');

    });
};

let winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' Won Icecream');
    });
};

// cleanRoom().then(function(result) {
//    return removeGarbage(result);
// }).then(function(result) {
//     return winIcecream(result);
// }).then(function(result) {
//     console.log('Finished '+ result);
// });

// Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
//     console.log('All Finished');
// });
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
    console.log('One of them is Finished');
});













