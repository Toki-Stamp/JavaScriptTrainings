/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {
    /* -------------------------------------------------- Переменные */
    var $pagination = $('#pagination-container');
    var activeClass = 'btn-success', defaultClass = 'btn-default', disabledClass = 'disabled';
    var elements = 'input[type="button"]';
    var pagesLimit = 15;
    /* -------------------------------------------------- Полезные функции */
    /* Классный логер в консоль */
    var log = function (target, message) {
        if (typeof target === 'string') console.log(target);
        else {
            if (message) console.log(message);
            console.dir(target);
        }
    };
    /* Ищем активную кнопку */
    var findActive = function (findClass) {
        findClass = findClass ? findClass : activeClass;
        return $pagination.find(elements + '.' + findClass).get(0);
    };
    /* Устанавливаем активную кнопку */
    var setActive = function (target, setClass, remClass) {
        setClass = setClass ? setClass : activeClass;
        remClass = remClass ? remClass : defaultClass;
        if (target && $pagination.find(elements + '.' + setClass)) $pagination.find(elements + '.' + setClass).removeClass(setClass).addClass(remClass);
        target = target ? target : ($pagination.find(elements + '.' + setClass).get(0) ? $pagination.find(elements + '.' + setClass).get(0) : $pagination.find(elements).first());
        if (!$(target).hasClass(setClass) || !$(target).hasClass(disabledClass)) $(target).addClass(setClass).removeClass(remClass);
        return target.get(0);
    };
    /* -------------------------------------------------- Main */
    setActive();
    /* -------------------------------------------------- Обработчики */
    /* Подсвечиваем активную страницу */
    $pagination.find(elements).on('click', function () {
        log(setActive($(this)), 'active');
    });
    /* Приячем фокус */
    $pagination.find(elements + ', button').on('click mouseleave mouseout', function () {
        $(this).blur();
    });
    /* Двигаем активную страницу вперёд / назад */
    $pagination.find('button').on('click', function () {
        var direction = $(this).get(0).value,
            $this = $(findActive()),
            $next;
        if (direction && direction === 'forward') {
            $next = $this.next();
        } else {
            $next = $this.prev();
        }
        setActive($next);
    })
});