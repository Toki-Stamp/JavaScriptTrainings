/**
 * Created by Fomichev Yuri on 04.12.2018
 * Contact me at : toki.stamp@gmail.com
 */

const rec = (object, property, value, clone) => {
    let result = (clone ? JSON.parse(JSON.stringify(object)) : object),
        path = property.split('.');

    return (function recursion(obj, pth) {
        let prop = pth.shift();

        if (pth.length) {
            obj[prop] = (obj[prop] || {});

            recursion(obj[prop], pth);
        } else {
            obj[prop] = value;
        }

        return result;
    })(result, path);
};

const getProperty = (object, property) => {
    let result = null;

    function isObject(o) {
        return o && (typeof o === 'object')
    }

    function scan(o, p) {
        if (o[p]) {
            result = o[p];
        } else {
            Object.entries(o).forEach(([key, value]) => {
                if (isObject(value)) {
                    result = scan(value, p);
                }
            })
        }

        return result;
    }

    if (isObject(object)) {
        result = scan(object, property);
    }

    return result;
};

(() => {
    const object = {
        goo: true,
        gle: true,
        'level-1': {
            foo: false,
            bar: false,
            'level-2': {
                nif: 'nif',
                naf: 'naf',
                'level-3': {
                    cum: 'shot',
                    jerK: 'off',
                    'level-4': {
                        hello: true,
                        world: true
                    }
                }
            }
        }
    };

    console.log(getProperty(object, 'level-4'));
    console.log(getProperty(object, 'cum'));
})();
