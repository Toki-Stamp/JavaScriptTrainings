/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {

    console.log('jQuery here!');

    // setAutoreplace($('#input-normal'));
    setAutoreplace();

    $('#input-advanced').keydown(function (e) {
        var self, parent;
        if (repeated(e.originalEvent)) return false;
        if (e && (e.key === ',')) {
            self   = $(this);
            parent = self.parent();
            self.next().addClass('glyphicon-pencil');
            parent.addClass('has-warning');
        }
    }).keyup(function () {
        var self   = $(this),
            parent = self.parent();
        if (parent.hasClass('has-warning')) {
            self.next().removeClass('glyphicon-pencil');
            parent.removeClass('has-warning');
        }
        autoreplace(self);
    });

    console.log('jQuery done!');

});

/**
 * Устанавливает обработчик событий keydown и keyup на целевой элемент
 *
 * @param {Element} target - целевой элемент (к примеру input)
 */
function setAutoreplace(target) {
    if (target) {
        target.keydown(function (e) {
            if (repeated(e.originalEvent)) return false;
        }).keyup(function () {
            autoreplace(target);
        });
    }
}

/**
 * Получает событие нажатия клавиатуры и анализирует является ли переданное событие
 * повторным, исключая те нажатия кнопок keyCodes, которые переданы в массиве except
 *
 * @param {Object} event - событие клавиатуры
 * @param {Array} [except] - массив кнопок keyCodes, которые игнорируются
 * @returns {Boolean} - возвращает true если событие игнорируется по keyCode
 */
function repeated(event, except) {
    /* 8 - backspace / 37 - left arrow / 39 - right arrow / 46 - delete */
    except = except || [8, 37, 39, 46];
    if (event && event.repeat) {
        return (except.indexOf(event.keyCode) === -1);
    }
    return false;
}

/**
 * Находит в целевом элементе совпадения с символом find
 * и замещает его символом replace если последний найден
 *
 * @param {Element} target - целевой элемент (к примеру input)
 * @param {String} [find] - символ для поиска
 * @param {String} [replace] - символ на замену найденного
 */
function autoreplace(target, find, replace) {
    var value,
        pattern;
    if (target) {
        find    = find || ',';
        replace = replace || '.';
        pattern = new RegExp(find, 'g');
        value   = target.val();
        value   = value.replace(pattern, replace);
        target.val(value);
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}