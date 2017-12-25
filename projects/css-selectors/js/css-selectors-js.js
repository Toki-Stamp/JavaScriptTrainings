/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var matrix    = {
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
    var model     = {};
    var tbody     = document.getElementsByTagName('tbody')[0];
    var rows      = tbody.getElementsByTagName('tr');
    var levels    = (function () {
        var levels   = {},
            target   = arguments[0],
            getLevel = function (element) {
                var list = element.classList,
                    item,
                    level;
                for (var i = 0, length = list.length; i < length; i += 1) {
                    item = list.item(i);
                    if (item.indexOf(target) >= 0) {
                        level = list.item(i);
                        break;
                    }
                }
                return level;
            };
        for (var i = 0, length = rows.length; i < length; i++) {
            var level = getLevel(rows[i]);
            if (level && !(level in levels)) {
                levels[level] = true;
            }
        }
        return Object.keys(levels).sort();
    })('level');
    var getRanges = function (targetLevel) {
        var range    = function (left, right) {
                var range = [],
                    i,
                    element;
                for (i = left; i < right; i += 1) {
                    element = rows[i];
                    range.push(element);
                }
                if (i === (rows.length - 1)) {
                    range.push(rows[i]);
                }
                return range;
            },
            ranges   = [],
            i,
            elements = tbody.getElementsByClassName(targetLevel),
            length   = elements.length,
            left,
            right;
        for (i = 0; i < length; i += 1) {
            left     = elements[i].rowIndex - 1;
            var last = elements[i + 1];
            if (last) {
                right = last.rowIndex - 1;
            } else {
                right = rows.length - 1;
            }
            ranges.push(range(left, right));
        }
        return ranges;
        /* граничная ситуация, если последний элемент того же класса, как у level-3 */
    };
    console.log(levels, 'type of', Object.prototype.toString.call(levels));
    var ranges = getRanges(levels[0]);
    ranges.forEach(function (range) {
        model[levels[0]] = range;
    });
    model.parent   = null;

});