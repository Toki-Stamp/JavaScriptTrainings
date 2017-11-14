/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {

    $('#input-normal').keydown(function (e) {
        if (repeated(e.originalEvent)) return false;
    }).keyup(function () {
        autoReplace($(this));
    });

    $('#input-advanced').keydown(function (e) {
        var self, parent;
        if (repeated(e.originalEvent)) return false;
        if (e && (e.key === ',')) {
            self = $(this);
            parent = self.parent().parent();
            self.next().addClass('glyphicon-pencil');
            parent.addClass('has-warning');
        }
    }).keyup(function () {
        var self = $(this),
            parent = self.parent().parent();
        if (parent.hasClass('has-warning')) {
            self.next().removeClass('glyphicon-pencil');
            parent.removeClass('has-warning');
        }
        autoReplace(self);
    });
});

$(document).keydown(function () {
    $('#input-generated').keydown(function (e) {
        var self, html;
        if (repeated(e.originalEvent)) return false;
        if (e && (e.key === ',')) {
            self = $(this);
            html = '<div id="input-advanced" class="form-group has-feedback">';
            html += '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">';
            html += '<input type="text" class="form-control auto-replace" title="Грациозно замещаем запятые!">';
            html += '<span class="glyphicon form-control-feedback"></span>';
            html += '</div>';
            html += '</div>';
            self.replaceWith(html);
        }
    });

    $('#input-generated').keyup(function () {
        var self = $(this);
        console.log(self);
        self.replaceWith('<input type="text" class="form-control" id="input-generated" title="Замещаем запятые и генерируем всю крутость вокруг">');
        autoReplace($(this));
    });
});

/**
 * Получает событие нажатия клавиатуры и анализирует является ли переданное
 * событие повторным, исключая те нажатия кнопок keyCodes,
 * которые переданы в массиве except
 *
 * @param {Object} event - событие клавиатуры
 * @param {Array} [except] - массив кнопок, которые игнорируются при анализе
 * @returns {Boolean} - возвращает true если повторяемое событие игнорируется по keyCode
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
 * и замещает его символом replace в случае нахождения
 *
 * @param {Element} target - целевой элемент, к примеру input
 * @param {String} [find] - символ для поиска
 * @param {String} [replace] - символ на замену найденного
 */
function autoReplace(target, find, replace) {
    var value,
        pattern;
    if (target) {
        find = find || ',';
        replace = replace || '.';
        pattern = new RegExp(find, 'g');
        value = target.val();
        value = value.replace(pattern, replace);
        target.val(value);
    }
}