/**
 * Created by Fomichev Yuri on 24.12.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Self-invoking function */
(function main() {
    var categories = [
        {name: 'Sport', id: 1, parent: null},
        {name: 'Games', id: 2, parent: null},
        {name: 'Music', id: 3, parent: null},
        {name: 'Football', id: 4, parent: 1},
        {name: 'BasketBall', id: 5, parent: 1},
        {name: 'Hockey', id: 6, parent: 1},
        {name: 'Strategy', id: 7, parent: 2},
        {name: 'Shooter', id: 8, parent: 2},
        {name: 'Simulators', id: 9, parent: 2},
        {name: 'Economics', id: 10, parent: 9},
        {name: 'Sports', id: 11, parent: 9},
        {name: 'RPG', id: 12, parent: 2},
        {name: 'Hip-Hop', id: 13, parent: 3},
        {name: 'Breakbeat', id: 14, parent: 3},
        {name: 'Dubstep', id: 15, parent: 3}
    ];
    /*
    {
        Sport: {
            Football: {},
            BasketBall: {},
            Hockey: {}
        },
        Games: {
            Strategy: {},
            Shooter: {},
            Simulators: {
                Economics: {},
                Sports: {}
            },
            RPG: {}
        },
        Music: {
            Hip-Hop: {},
            Breakbeat: {},
            Dubstep: {}
        }
    }
    */
    console.log(JSON.stringify(makeTree(categories, null), null, 4));
})();

function recursion(data, id, separator) {
    // console.log('data', data, 'id', id, 'separator', '"' + separator + '"');
    for (var i = 0, size = data.length; i < size; i++) {
        if (data[i].parent === id) {
            console.log(separator + data[i].name);
            recursion(data, data[i].id, '\t' + separator);
        }
    }
}

function countDown(num) {
    /* Base */
    if (num === 0) return;
    console.log('this count is', num);
    /* All the rest */
    countDown(num - 1);
}

function makeTree(categories, parent) {
    var object = {};
    categories
        .filter(function (category) {
            var result = (category.parent === parent);
            return result;
        })
        .forEach(function (category) {
            object[category.name] = makeTree(categories, category.id);
            return object[category.name];
        });
    return object;
}
