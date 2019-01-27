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
    $('.main-table td').each(function (index, item) {
        let element = $(item),
            text    = element.text();
        
        element
        .attr('data-label', (function () {
            let map = {};
            
            $('.main-table #name th').each(function (index, item) {
                if (!map.hasOwnProperty(map[index])) {
                    map[index] = item.textContent;
                }
            });
            
            return map;
        })()[item.cellIndex])
        .html('<div class="x-data-wrapper">' + text + '</div>');
    });
    
    $('.main-table').on('click', 'tbody tr', function (e) {
        $(e.currentTarget).addClass('active').siblings().removeClass('active');
    });
    
    // $('.main-table td').on('mouseover', function (event) {
    //     $(this).find('div.x-data-wrapper').css('max-height', '100%');
    // }).on('mouseout', function (event) {
    //     $(this).find('div.x-data-wrapper').css('max-height', '80px');
    // });
    
    var header = document.getElementsByTagName('body')[0].getElementsByTagName('h1')[0],
        paragraph = document.getElementsByTagName('body')[0].getElementsByTagName('div')[0];
    
    $clamp(header, {clamp: 1, useNativeClamp: false});
    $clamp(paragraph, {clamp: 10, useNativeClamp: false, animate: true});
});

/* Self-invoking function */
(function main() {
})();