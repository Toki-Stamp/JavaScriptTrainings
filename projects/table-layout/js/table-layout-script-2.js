/* jQuery */
jQuery(document).ready(function main() {
    let tableContainer = $('.x-table-container');
    /**
     *  1. Добавляем атрибут data-label ко всем элементам x-data-wrapper,
     *  со значением взятым из th (#header-title) того же столбца, в котором находится div.
     *  Используется для создания меток ячеек таблицы при минималистичном отображении
     *
     *  2. Оборачиваем текстовые данные внутри элементов td конструкцией
     *  <div class="..."></div>, с целью фиксирования параметров контейнера
     * */
    tableContainer.find('td, th').each(function (index, item) {
        let element = $(item),
            wrap,
            text    = element.text(),
            html    = element.html();
        
        if (element.is('.x-table-container thead tr:eq(2) th')) {
            wrap = html;
        } else {
            wrap = text;
        }
        
        element.html('<div class="x-data-wrapper">' + wrap + '</div>');

        if (element.is('td')) {
            element.find('.x-data-wrapper').attr('data-label', (function () {
                let map = {};

                $('#header-title').find('th').each(function (index, item) {
                    if (!map.hasOwnProperty(map[index])) {
                        map[index] = item.textContent;
                    }
                });

                return map;
            })()[item.cellIndex])
        }
    });
    
    tableContainer.find('tbody').on('click', 'tr', function (e) {
        $(e.currentTarget).addClass('active').siblings().removeClass('active');
    });
    
    tableContainer.find('thead').find('select, input').addClass('form-control');
});