/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var matrix   = {
        'level-0': {
            'parents':     false,
            'children':    ['level-1', 'level-2', 'level-3', 'level-4'],
            'insert-rule': false
        },
        'level-1': {
            'parents':     ['level-0'],
            'children':    ['level-2', 'level-3', 'level-4'],
            'insert-rule': ['level-0']
        },
        'level-2': {
            'parents':     ['level-1'],
            'children':    ['level-3', 'level-4'],
            'insert-rule': ['level-0', 'level-1']
        },
        'level-3': {
            'parents':     ['level-2', 'level-1'],
            'children':    ['level-4'],
            'insert-rule': ['level-0', 'level-2']
        },
        'level-4': {
            'parents':     ['level-3', 'level-2', 'level-1'],
            'children':    false,
            'insert-rule': ['level-0', 'level-2', 'level-3']
        }
    };
    var tbody    = document.getElementsByTagName('tbody')[0];
    var rows     = tbody.getElementsByTagName('tr');
    var length   = rows.length, i;
    var element, index, level,
        getLevel = function (el) {
            var target = 'level',
                list   = el.classList,
                item,
                length = list.length, i,
                level;
            for (i = 0; i < length; i += 1) {
                item = list.item(i);
                if (item.indexOf(target) >= 0) {
                    level = list.item(i);
                    break;
                }
            }
            return level;
        };
    var classes  = {}, classesArray;
    for (i = 0; i < length; i += 1) {
        element        = rows[i];
        level          = getLevel(element);
        index          = element.rowIndex;
        classes[level] = index;
        console.log(index, ':', level);
    }
    classesArray = Object.keys(classes);

});