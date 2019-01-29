/* jQuery */
jQuery(document).ready(function main() {
    /**
     *  1. Добавляем атрибут data-label ко всем элементам td,
     *  со значением взятым из th (#name) того же столбца, в котором находится td.
     *  Используется для создания меток ячеек таблицы при минималистичном отображении
     *
     *  2. Оборачиваем текстовые данные внутри элементов td конструкцией
     *  <div class="..."></div>, с целью фиксирования параметра height элемента td
     * */
    $('.x-table-container td, .x-table-container th').each(function (index, item) {
        let element = $(item),
            wrap,
            text    = element.text(),
            html    = element.html();

        if (element.is('td')) {
            element.attr('data-label', (function () {
                let map = {};

                $('#name').find('th').each(function (index, item) {
                    if (!map.hasOwnProperty(map[index])) {
                        map[index] = item.textContent;
                    }
                });

                return map;
            })()[item.cellIndex])
        }
        if (element.is('.x-table-container thead tr:eq(2) th')) {
            wrap = html;
        } else {
            wrap = text;
        }

        element.html('<div class="x-data-wrapper">' + wrap + '</div>');
    });

    $('.x-table-container').find('tbody').on('click', 'tr', function (e) {
        $(e.currentTarget).addClass('active').siblings().removeClass('active');
    });

    $('.x-table-container').find('thead').find('select, input').addClass('form-control');
});