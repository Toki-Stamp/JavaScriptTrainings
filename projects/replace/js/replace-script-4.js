/**
 * Created by Fomichev Yuri on 20.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

var inputReplace = {

    /**
     *  Правило поиска полей ввода (input) для автозамены по ЧТЗ 15.5.п.2.2
     */
    SEARCH_RULE: {
        technicChars:   [8, 9, 10, 12, 13, 15, 16, 18, 19, 20, 22, 24, 25, 26, 28, 45, 47, 48, 49,
            55, 56, 57, 62, 66, 68, 77, 79, 80, 83, 94, 95, 102, 104, 134, 135, 136, 141, 142, 143,
            144, 146, 148, 260, 261, 262, 263, 264, 265, 268, 303, 315, 316, 317, 318, 319, 320, 321,
            323, 324, 325, 326, 328, 329, 330, 332, 333, 334, 335, 369],
        regExpressions: [4, 8, 11, 12, 13, 17, 18, 19, 22, 38, 41]
    },

    /**
     * Устанавливает обработчик событий keydown и keyup на целевой элемент
     *
     * @param {Element} element - целевой элемент (к примеру input)
     */
    setAutoreplace: function (element) {
        if (element) {
            element.keydown(function (e) {
                if (inputReplace._repeated(e.originalEvent)) return false;
            }).keyup(function () {
                inputReplace._autoreplace(element);
            });
        }
    },

    /**
     * Ищет в свойствах правила для поиска SEARCH_RULE совпадения
     * charId для technicChars и exprId для regExpressions
     *
     * @param {Number} charId - NKA_SPR.X_RH3_TECHNICCHAR.TECHNICCHAR_ID
     * @param {Number} exprId - NKA_SPR.X_RH3_EXPRESSION.EXPRESSION_ID
     * @returns {Boolean} - возвращает true если найдено хотя бы 1 совпадение по всем свойствам
     */
    check: function (charId, exprId) {
        var check = false;
        if (charId || exprId) {
            check = ((this.SEARCH_RULE['technicChars'].indexOf(charId) !== -1) ||
                (this.SEARCH_RULE['regExpressions'].indexOf(exprId) !== -1))
        }
        return check;
    },

    /**
     * Получает событие нажатия клавиатуры и анализирует является ли переданное событие
     * повторным, исключая те нажатия кнопок keyCodes, которые переданы в массиве except
     *
     * @param {Object} event - событие клавиатуры
     * @param {Array} [except] - массив кнопок keyCodes, которые игнорируются
     * @returns {Boolean} - возвращает true если событие игнорируется по keyCode
     */
    _repeated: function (event, except) {
        /* 8 - backspace / 37 - left arrow / 39 - right arrow / 46 - delete */
        except = except || [8, 37, 39, 46];
        if (event && event.repeat) {
            return (except.indexOf(event.keyCode) === -1);
        }
        return false;
    },

    /**
     * Находит в целевом элементе совпадения с символом find
     * и замещает его символом replace если последний найден
     *
     * @param {Element} element - целевой элемент (к примеру input)
     * @param {String} [find] - символ для поиска
     * @param {String} [replace] - символ на замену найденного
     */
    _autoreplace: function (element, find, replace) {
        var value,
            pattern;
        if (element) {
            find    = find || ',';
            replace = replace || '.';
            pattern = new RegExp(find, 'g');
            value   = element.val();
            value   = value.replace(pattern, replace);
            element.val(value);
        }
    }
};

/* jQuery */
jQuery(document).ready(function main() {
    var currentInput = $('#test');
    if (inputReplace.check(data.item.technicCharId, data.item.expressionId.expressionId)) {
        inputReplace.setAutoreplace(currentInput);
    }
});

/* Self-invoking function */
(function main() {
    console.log('Self-invoking function is here!');
})();