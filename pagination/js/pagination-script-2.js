/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {
    /* -------------------------------------------------- Переменные */
    var $pagination = $('#pagination-container');
    var $navigation;
    var $pages;
    var $all;
    /* -------------------------------------------------- Константы */
    const activeClass = 'btn-primary', defaultClass = 'btn-default';
    /* -------------------------------------------------- Полезные функции */
    /* Классный логер в консоль */
    var log = function (target, message) {
        if (typeof target === 'string') console.log(target);
        else {
            if (message) console.log(message);
            console.dir(target);
        }
    };
    /* Устанавливаем активную кнопку */
    var setActive = function (target) {
        var $active = findActive();
        if ($active) {
            $active.addClass(defaultClass).removeClass(activeClass);
            trigger($navigation, true);
        }
        if (target) {
            target.addClass(activeClass).removeClass(defaultClass);
            if (target.val() === $pages.first().val()) {
                trigger($navigation.first(), false);
            } else if (target.val() === $pages.last().val()) {
                trigger($navigation.last(), false);
            } else {
                trigger($navigation, true);
            }
        }
    };
    /* Ищем активную кнопку */
    var findActive = function () {
        var $active = $pages.filter('.' + activeClass);
        return $active.length ? $active : undefined;
    };
    /* Ищем следующую кнопку */
    var findNext = function (direction) {
        var $active = findActive(),
            $first = $pages ? $pages.first() : undefined,
            $last = $pages ? $pages.last() : undefined,
            $next,
            filter = 'input[type="button"]';
        if ($pages && direction) {
            switch (direction) {
                case 'forward':
                    if ($active.val() !== $last.val()) {
                        $next = $active.next(filter);
                    }
                    break;
                case 'backward':
                    if ($active.val() !== $first.val()) {
                        $next = $active.prev(filter);
                    }
                    break;
            }
        }
        return $next;
    };
    /* Включаем / выключаем функциональность навигационных стрелок */
    var trigger = function (target, value) {
        if (target) {
            target.prop('disabled', !value);
        }
    };
    /* Строим панель постраничной навигации */
    var buildPagination = function (pages) {
        /* Рисуем навигационную кнопку */
        var addNavigationButton = function (target, size, value, glyphicon) {
            if (target && size && size > 1) {
                target.append(
                    '<button class="btn btn-default" value="' + value + '">' +
                    '<span class="glyphicon ' + glyphicon + '"></span>' +
                    '</button>'
                );
            }
        };
        /* Рисуем страницу */
        var addPages = function (target, size) {
            if (target && size) {
                for (var i = 1; i <= size; i++) {
                    target.append(
                        '<input type="button" class="btn btn-default" value="' + i + '"/>'
                    );
                }
            }
        };
        addNavigationButton($pagination, pages, 'backward', 'glyphicon-hand-left');
        addPages($pagination, pages);
        addNavigationButton($pagination, pages, 'forward', 'glyphicon-hand-right');
    };
    /* Инициализация панели постраничного отображения */
    var initialize = function (pages) {
        /* -------------------------------------------------- Генерируем панель навигации */
        buildPagination(pages);
        /* -------------------------------------------------- Назначаем переменные */
        $navigation = $pagination.find('button');
        $pages = $pagination.find('input[type="button"]');
        $all = $pagination.find('input[type="button"], button');
        /* -------------------------------------------------- Создаём обработчики событий */
        /* Подсвечиваем активную страницу */
        $pages.on('click', function () {
            setActive($(this));
            log($(this).val());
        });
        /* Приячем фокус */
        $all.on('click mouseleave mouseout', function () {
            $(this).blur();
        });
        /* Двигаем активную страницу вперёд / назад */
        $navigation.on('click', function () {
            var $self = $(this),
                direction = $self.val(),
                $next = findNext(direction);
            if ($next) {
                setActive($next);
            }
        });
        /* -------------------------------------------------- Выделяем первую активную страницу */
        setActive($pages.first());
    };
    /* Очистка панели постраничного отображения */
    var destroy = function () {
        $pagination.empty();
    };
    /* -------------------------------------------------- Main */
    initialize(10);
    /* -------------------------------------------------- Обработчики */
    /* Обработчик нажатий на клавиатуру */
    $('body').on('keyup', function (e) {
        if (e.keyCode == 27) {
            destroy();
        } else if (e.keyCode == 13) {
            initialize(7);
        }
    });
});