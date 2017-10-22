/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {
    /* -------------------------------------------------- Переменные */
    var $pagination = $('#pagination-container');
    var activeClass = 'btn-success', defaultClass = 'btn-default';
    /* -------------------------------------------------- Константы */
    const currentButtonAttributeName = 'btn-current-val';
    const previousButtonAttributeName = 'btn-previous-val';
    /* -------------------------------------------------- Полезные функции */
    /* Классный логер в консоль */
    var log = function (target, message) {
        if (typeof target === 'string') console.log(target);
        else {
            if (message) console.log(message);
            console.dir(target);
        }
    };
    /* Устанавливаем класс активной кнопки */
    var setActive = function (setClass, removeClass) {
        var $currentVal = $pagination.attr(currentButtonAttributeName) ? $pagination.attr(currentButtonAttributeName) : 1;
        var $previousVal = $pagination.attr(previousButtonAttributeName);
        var $currentButton = $pagination.find('input[type="button"][value="' + $currentVal + '"]');
        var $previousButton = $previousVal ? $pagination.find('input[type="button"][value="' + $previousVal + '"]') : undefined;
        activeClass = setClass ? setClass : activeClass;
        defaultClass = removeClass ? removeClass : defaultClass;
        if ($currentVal) $currentButton.addClass(activeClass).removeClass(defaultClass);
        if ($previousVal) $previousButton.addClass(defaultClass).removeClass(activeClass);
    };
    /* Устанавливаем необходимое свойство */
    var setProperty = function (target, property, value) {
        if (value) {
            /* Устанавыливаем */
            target.prop(property, value);
        } else {
            /* Переключаем */
            target.prop(property, function (index, oldValue) {
                /* Игнорируем параметр index */
                return !oldValue;
            });
        }
    };
    /* -------------------------------------------------- Main */
    setActive();
    /* -------------------------------------------------- Обработчики */
    /* Подсвечиваем активную страницу */
    $pagination.find('input[type="button"]').on('click', function () {
        var $self = $(this);
        if (!$self.hasClass('disabled') || !$self.hasClass(activeClass)) setActive();
    });
    /* Стрелка влево / вправо */
    $pagination.find('button')
        .on('mouseup', function () {
        })
        .on('dblclick', function () {
        });
    /* Все кнопки панели постраничного отображения */
    $pagination.find('input[type="button"], button')
        .on('mousedown', function () {
            var $self = $(this),
                $parent = $self.parent(),
                currentVal = $self.val(),
                previousVal = $parent.attr(currentButtonAttributeName) ? $parent.attr(currentButtonAttributeName) : 1;
            if (currentVal !== previousVal) {
                $parent.attr(currentButtonAttributeName, currentVal);
                $parent.attr(previousButtonAttributeName, previousVal);
            }
        })
        .on('mouseup', function () {
            $(this).blur();
        });
});