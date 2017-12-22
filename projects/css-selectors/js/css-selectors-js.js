/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var matrix = {
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
    var model  = {};
    var tbody  = document.getElementsByTagName('tbody')[0];
    var rows   = tbody.getElementsByTagName('tr');
    var levels = (function () {
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
    var spans  = function (targetLevel, left, right) {
        var range = [],
            i,
            element;

        left  = left || ((tbody.getElementsByClassName(targetLevel)[0]).rowIndex - 1);
        right = right || ((tbody.getElementsByClassName(targetLevel)[1]).rowIndex - 1);

        for (i = left; i < right; i += 1) {
            element = rows[i];
            range.push(element);
        }
        return range;
    };
    console.log(levels, 'type of', Object.prototype.toString.call(levels));
});