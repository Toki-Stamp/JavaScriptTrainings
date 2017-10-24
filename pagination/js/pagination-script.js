/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {
    var pagination = {
        /* -------------------------------------------------- Свойства */
        settings: {
            container: undefined,           // Ссылка на контейнер панели навигации
            controls: undefined,            // Ссылка на кнопки навигации вперёд / назад
            pages: undefined,               // Ссылка на активные страницы 1 .. n
            buttons: undefined,             // Ссылка на все кнопки (стрелки и страницы)
            activeClass: 'btn-primary',
            defaultClass: 'btn-default',
            pagesFilter: 'input[type="button"]'
        },
        /* -------------------------------------------------- Полезные методы */
        /* Устанавливаем активную кнопку */
        setCurrentPage: function (target) {
            var prevPage = this.getCurrentPage();
            if (prevPage) {
                prevPage.addClass(this.settings.defaultClass).removeClass(this.settings.activeClass);
                this.triggerControls(this.settings.controls, true);
            }
            if (target) {
                target.addClass(this.settings.activeClass).removeClass(this.settings.defaultClass);
                if (target.val() === this.settings.pages.first().val()) {
                    this.triggerControls(this.settings.controls.first(), false);
                } else if (target.val() === this.settings.pages.last().val()) {
                    this.triggerControls(this.settings.controls.last(), false);
                } else {
                    this.triggerControls(this.settings.controls, true);
                }
            }
        },
        /* Ищем активную кнопку */
        getCurrentPage: function () {
            var activePage = this.pages.filter('.' + this.settings.activeClass);
            return activePage.length ? activePage : undefined;
        },
        /* Ищем следующую кнопку */
        getNextPage: function (direction) {
            var activePage = this.getCurrentPage(),
                firstPage = this.settings.pages ? this.settings.pages.first() : undefined,
                lastPage = this.settings.pages ? this.settings.pages.last() : undefined,
                nextPage;
            if (this.settings.pages && direction) {
                switch (direction) {
                    case 'forward':
                        if (activePage.val() !== lastPage.val()) {
                            nextPage = activePage.next(this.settings.pagesFilter);
                        }
                        break;
                    case 'backward':
                        if (activePage.val() !== firstPage.val()) {
                            nextPage = activePage.prev(this.settings.pagesFilter);
                        }
                        break;
                }
            }
            return nextPage;
        },
        /* Включаем / выключаем функциональность навигационных стрелок */
        triggerControls: function (target, value) {
            if (target) {
                target.prop('disabled', !value);
            }
        },
        /* Строим панель постраничной навигации */
        buildPagination: function (pages) {
            /* Рисуем навигационную кнопку */
            var buildControls = function (target, size, value, glyphicon) {
                if (target && size && size > 1) {
                    target.append(
                        '<button class="btn btn-default" value="' + value + '">' +
                        '<span class="glyphicon ' + glyphicon + '"></span>' +
                        '</button>'
                    );
                }
            };
            /* Рисуем страницы */
            var buildPages = function (target, size) {
                if (target && size) {
                    for (var i = 1; i <= size; i++) {
                        target.append(
                            '<input type="button" class="btn btn-default" value="' + i + '"/>'
                        );
                    }
                }
            };
            buildControls(this.$container, pages, 'backward', 'glyphicon-hand-left');
            buildPages(this.$container, pages);
            buildControls(this.$container, pages, 'forward', 'glyphicon-hand-right');
        },
        /* Очистка панели постраничного отображения */
        destroy: function () {
            this.$container.empty();
        },
        /* Инициализация панели постраничного отображения */
        initialize: function (pages) {
            /* -------------------------------------------------- Генерируем панель навигации */
            this.buildPagination(pages);
            /* -------------------------------------------------- Назначаем переменные */
            this.$navigation = this.$container.find('button');
            this.$pages = this.$container.find('input[type="button"]');
            this.$all = this.$container.find('input[type="button"], button');
            /* -------------------------------------------------- Выделяем первую активную страницу */
            this.setCurrentPage(this.$pages.first());
        }
    };
    /* Назначение обработчиков событий */
    // var setHandlers = function () {
    //     /* -------------------------------------------------- Создаём обработчики событий */
    //     /* Подсвечиваем активную страницу */
    //     pagination.$pages.on('click', function () {
    //         pagination.setCurrentPage($(this));
    //         log($(this).val());
    //     });
    //     /* Приячем фокус */
    //     pagination.$all.on('click mouseleave mouseout', function () {
    //         $(this).blur();
    //     });
    //     /* Двигаем активную страницу вперёд / назад */
    //     pagination.$navigation.on('click', function () {
    //         var $self = $(this),
    //             direction = $self.val(),
    //             $next = pagination.getNextPage(direction);
    //         if ($next) {
    //             pagination.setCurrentPage($next);
    //         }
    //     });
    // };
    /* Классный логер в консоль */
    function log(target, message) {
        if (typeof target === 'string') console.log(target);
        else {
            if (message) console.log(message);
            console.dir(target);
        }
    };
    log(pagination.settings, 'settings');
    pagination.buildPagination(10);
    // /* Обработчик нажатий на клавиатуру */
    // $('body').on('keyup', function (e) {
    //     if (e.keyCode == 27) {
    //         pagination.destroy();
    //     } else if (e.keyCode == 13) {
    //         pagination.initialize(7);
    //         setHandlers();
    //         log(pagination.getCurrentPage(), 'active');
    //     }
    // });
});