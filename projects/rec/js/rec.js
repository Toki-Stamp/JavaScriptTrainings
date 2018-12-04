/**
 * Created by Fomichev Yuri on 04.12.2018
 * Contact me at : toki.stamp@gmail.com
 */

const rec = (() => {
    return {
        setProperty: function (object, property, value, clone) {
            let result = (clone ? JSON.parse(JSON.stringify(object)) : object),
                path   = property.split('.');

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
        }
    }
})();

(() => {
    // let o1 = {
    //         'level-1':               {
    //             'some-level-1-stuff': {
    //                 'hello-1-1': 'world-1-1',
    //                 'hello-1-2': 'world-1-2'
    //             },
    //             'level-2':            {
    //                 'some-level-2-1-stuff': {
    //                     'hello-2-1-1': 'world-2-1-1',
    //                     'hello-2-1-2': 'world-2-1-2'
    //                 },
    //                 'some-level-2-2-stuff': {
    //                     'hello-2-2-1': 'world-2-2-1',
    //                     'hello-2-2-2': 'world-2-2-2'
    //                 },
    //             }
    //         },
    //         'some-root-level-stuff': {
    //             'hello-root-1': 'world-root-1',
    //             'hello-root-2': 'world-root-2'
    //         }
    //     },
    //     o2 = {
    //         'some-root-level-stuff': {
    //             'hello-root-1': 'world-root-1',
    //             'hello-root-2': 'world-root-2'
    //         }
    //     },
    //     o3 = {
    //         'level-1':               {
    //             'some-level-1-stuff': {
    //                 'hello-1-1': 'world-1-1',
    //                 'hello-1-2': 'world-1-2'
    //             },
    //             'level-2':            {
    //                 'some-level-2-1-stuff': {
    //                     'hello-2-1-1': 'world-2-1-1',
    //                     'hello-2-1-2': 'world-2-1-2'
    //                 },
    //                 'some-level-2-2-stuff': {
    //                     'hello-2-2-1': 'world-2-2-1',
    //                     'hello-2-2-2': 'world-2-2-2'
    //                 },
    //                 'level-3':              {
    //                     'some-level-3-stuff': {
    //                         'hello-3-1': 'world-3-1',
    //                         'hello-3-2': 'world-3-2'
    //                     },
    //                     'field-1':            false
    //                 }
    //             }
    //         },
    //         'some-root-level-stuff': {
    //             'hello-root-1': 'world-root-1',
    //             'hello-root-2': 'world-root-2'
    //         }
    //     };

    // console.log('object', o1);
    //
    // if (confirm('Add to o1?')) {
    //     rec.setProperty(o1, 'level-1.level-2.value', {e: 'eee', f: 'fff'});
    //     console.log('object', o1);
    // }
    // console.log('object', o2);
    //
    // if (confirm('Add to o2?')) {
    //     rec.setProperty(o2, 'level-1.level-2.value', {e: 'eee', f: 'fff'});
    //     console.log('object', o2);
    // }
    //
    // console.log('object', o3);
    //
    // if (confirm('Add to o3?')) {
    //     rec.setProperty(o3, 'level-1.level-2.value', {e: 'eee', f: 'fff'});
    //     console.log('object', o3);
    // }
    //
    // console.log('object', o2);
    //
    // if (confirm('Add to o2 again?')) {
    //     rec.setProperty(o2, 'level-1.level-2.level-3.level-4.level-5.level-6', {'level-7': {'level-8': {'value': {'a': 'aaa', 'b': 'bbb'}}}});
    //     console.log('object', o2);
    // }

    let oo1 = {goo: true, gle: false, 'level-1': {foo: true, bar: false}},
        oo2, oo3;

    oo2 = rec.setProperty(oo1, 'level-1.level-2.value', {e: 'eee', f: 'fff'}, true);
    oo3 = rec.setProperty(oo2, 'the', 'horse', true);

    console.log({oo1, oo2, oo3});
})();
