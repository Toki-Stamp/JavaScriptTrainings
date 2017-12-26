/**
 * Created by Fomichev Yuri on 24.12.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

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

/* Self-invoking function */
(function main() {
})();
/* jQuery */
jQuery(document).ready(function main() {
});