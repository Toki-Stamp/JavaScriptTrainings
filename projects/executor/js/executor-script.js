/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

// var _ = {
//     executor: {
//         chain  : [],
//         check  : function (fn) {
//             return (fn && $.isFunction(fn));
//         },
//         add    : function (fn, params) {
//             if (this.check(fn)) {
//                 if (params) {
//                     fn = fn.bind(this, params);
//                 }
//
//                 this.chain.push(fn);
//             }
//
//             return this;
//         },
//         execute: function () {
//             var chain = this.chain,
//                 i, size,
//                 run   = function (fn, next) {
//                     if (next && (next < chain.length)) {
//                         (function (f) {
//                             return f.apply(null, arguments);
//                         })(fn);
//                         run(chain[next], next + 1);
//                     } else {
//                         fn();
//                     }
//                 };
//
//             run(chain[0], 1);
//
//             console.log('execution successfully done!')
//         }
//     },
//
//     executor_v2: {
//         chain: [],
//         check: function (fn) {
//             return (fn && $.isFunction(fn));
//         },
//         add  : function (fn) {
//             if (this.check(fn)) {
//                 var myFirstPromise = new Promise(function (resolve, reject) {
//                     // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
//                     // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код.
//                     // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
//                     setTimeout(function () {
//                         resolve("promise!"); // Ура! Всё прошло хорошо!
//                     }, 2500);
//
//                     myFirstPromise.then(function (message) {
//                         console.log("then");
//                     });
//                 });
//             }
//         }
//     },
//
//     test: {
//         delay: function (time) {
//             var timer = (arguments.length) ? arguments[0] : 5000;
//
//             console.log('i am timer. my delay is', timer);
//
//             setTimeout(function () {
//                 console.log('timeout');
//             }, timer);
//         },
//         a    : function (par1) {
//             var args = [].slice.call(arguments, 0);
//
//             console.log('i am fn a. i have', args);
//         },
//         b    : function (par1, par2) {
//             var args = [].slice.call(arguments, 0);
//
//             console.log('i am fn b. i have', args);
//         },
//         c    : function (par1, par2, par3) {
//             var args = [].slice.call(arguments, 0);
//
//             console.log('i am fn c. i have', args);
//         }
//     }
// };
//
// (function main() {
//     var executor = _.executor_v2,
//         a        = _.test.a,
//         b        = _.test.b,
//         c        = _.test.c,
//         d        = _.test.delay;
//
//     executor
//         .add(a, [1, 2, 3, 4, 5])
//         .add(a, ['100', '200'])
//         .add(b)
//         .add(b, [true, false])
//         .add(c, [0, 0, 0])
//         // .add(d)
//         .add(a, [5, 4, 3, 2, 1])
//         // .add(d, [1000])
//         .execute();
// })();

var p1 = Promise.resolve(1);
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 5000, "2");
});
var p3 = 3;
var p4 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 250, 4);
});
var p5 = Promise.resolve("5");

Promise.all([p1, p2, p3, p4, p5]).then(function (values) {
    console.log('done!');
    console.log(values);
});

//Выведет:
// [3, 1337, "foo"]

