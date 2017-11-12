/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {
    /* Обработчик нажатий на клавиатуру */
    // $('body').on('keyup', function (e) {
    //     var value;
    //     if (e.keyCode === 27) {
    //         value = $('#pagination-container');
    //     } else if (e.keyCode === 13) {
    //         value = $('#pagination-container-2');
    //     }
    //     pagination.setVariables('container', value);
    //     $('#result').text(pagination.variables.container.text());
    // });
    pagination.initialize(7);
});

var pagination = {
    /* -------------------------------------------------- Свойства */
    variables: {
        container: undefined, // Ссылка на контейнер панели навигации
        controls: undefined, // Ссылка на кнопки навигации вперёд / назад
        pages: undefined, // Ссылка на активные страницы 1 .. n
        buttons: undefined // Ссылка на все кнопки (стрелки и страницы)
    },
    constants: {
        activeClass: 'btn-primary',
        defaultClass: 'btn-default'
    },
    /* -------------------------------------------------- Методы */
    /* Устанавливаем активную кнопку */
    setCurrentPage: function (target) {
        var prevPage = this.getCurrentPage();
        this.triggerControls(this.variables.controls, true);
        if (prevPage) {
            prevPage.addClass(this.constants.defaultClass).removeClass(this.constants.activeClass);
        }
        if (target) {
            target.addClass(this.variables.activeClass).removeClass(this.variables.defaultClass);
            switch (target.val()) {
                case this.variables.pages.first().val():
                    this.triggerControls(this.variables.controls.first(), false);
                    break;
                case this.variables.pages.last().val():
                    this.triggerControls(this.variables.controls.last(), false);
                    break;
            }
        }
    },
    /* Ищем активную кнопку */
    getCurrentPage: function () {
        var activePage = this.pages.filter('.' + this.constants.activeClass);
        return activePage.length ? activePage : undefined;
    },
    /* Ищем следующую кнопку */
    getNextPage: function (direction) {
        var activePage = this.getCurrentPage(),
            firstPage = this.variables.pages ? this.variables.pages.first() : undefined,
            lastPage = this.variables.pages ? this.variables.pages.last() : undefined,
            nextPage;
        if (this.variables.pages && direction) {
            switch (direction) {
                case 'forward':
                    if (activePage.val() !== lastPage.val()) {
                        nextPage = activePage.next('input[type="button"]');
                    }
                    break;
                case 'backward':
                    if (activePage.val() !== firstPage.val()) {
                        nextPage = activePage.prev('input[type="button"]');
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
    buildPaginationPanel: function (pages) {
        /* Создаём панель постраничного отображения */
        var buildPanel = function (pages) {
            if (pages) {
                this.variables.container
                    .attr('role', 'group')
                    .attr('aria-label', 'pagination')
                    .addClass('btn-group btn-group-sm');
            }
        };
        /* Рисуем навигационные кнопки */
        var buildControls = function (pages, value, glyphicon) {
            if (pages && pages > 1) {
                this.variables.container.append(
                    '<button class="btn btn-default" value="' + value + '">' +
                    '<span class="glyphicon ' + glyphicon + '"></span></button>'
                );
            }
        };
        /* Рисуем страницы */
        var buildPages = function (pages) {
            if (pages) {
                for (var i = 1; i <= pages; i++) {
                    this.variables.container.append(
                        '<input type="button" class="btn btn-default" value="' + i + '"/>'
                    );
                }
            }
        };
        buildPanel(pages);
        buildControls(pages, 'backward', 'glyphicon-hand-left');
        buildPages(pages);
        buildControls(pages, 'forward', 'glyphicon-hand-right');
    },
    /* Очистка панели постраничного отображения */
    destroy: function () {
        this.variables.container.empty();
    },
    /* Инициализация ссылок на элементы панели постраничного отображения */
    setVariables: function (target, value) {
        if (value) {
            this.variables[target] = value;
        }
    },
    /* Инициализация обработчиков событий на элементах панели постраничного отображения */
    setHandlersPagination: function () {

    },

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

    /* Инициализация панели постраничного отображения */
    initialize: function (pages) {
        var container = $('#pagination-container');
        /* -------------------------------------------------- Назначаем переменные */
        pagination.setVariables('container', container);
        /* -------------------------------------------------- Генерируем панель навигации */
        pagination.buildPaginationPanel(pages);
        this.setVariables('controls', container.find('button'));
        this.setVariables('pages', container.find('input[type="button"]'));
        this.setVariables('buttons', container.find('input[type="button"], button'));
        /* -------------------------------------------------- Выделяем первую активную страницу */
        this.setCurrentPage(this.variables.pages.first());
    }
};

/* Классный логер в консоль */
function log(target, message) {
    if (typeof target === 'string') console.log(target);
    else {
        if (message) console.log(message);
        console.dir(target);
    }
}