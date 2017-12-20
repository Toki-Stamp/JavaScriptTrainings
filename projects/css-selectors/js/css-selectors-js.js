/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var matrix      = {
        'level-0': {
            'parents'    : false,
            'children'   : ['level-1', 'level-2', 'level-3', 'level-4'],
            'insert-rule': false
        },
        'level-1': {
            'parents'    : ['level-0'],
            'children'   : ['level-2', 'level-3', 'level-4'],
            'insert-rule': ['level-0']
        },
        'level-2': {
            'parents'    : ['level-1'],
            'children'   : ['level-3', 'level-4'],
            'insert-rule': ['level-0', 'level-1']
        },
        'level-3': {
            'parents'    : ['level-2', 'level-1'],
            'children'   : ['level-4'],
            'insert-rule': ['level-0', 'level-2']
        },
        'level-4': {
            'parents'    : ['level-3', 'level-2', 'level-1'],
            'children'   : false,
            'insert-rule': ['level-0', 'level-2', 'level-3']
        }
    };
    var getClasses  = function (element) {
        return element.className.trim().split(/\s+/);
    };
    var siftClasses = function (classes) {
        var item,
            i,
            length = classes.length;
        if ($.isArray(classes)) {
            for (i = 0; i < length; i += 1) {
                item = classes[i];
                if (Object.keys(matrix).indexOf(item) >= 0) {
                    return item;
                }
            }
        }
    };
    var rows        = $('tbody > tr, thead > tr'), length = rows.length, i;
    for (i = 0; i < length; i += 1) {
        console.log('Элемент-' + i, ':', rows.eq(i).get(0));
    }
});