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
    $('.table-body td, .table-header th').each(function (index, item) {
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
    
    (function () {
        var target = $(".table-header")[0]; // <== Getting raw element
        
        $(".table-body").scroll(function () {
            target.scrollTop = this.scrollTop;
            target.scrollLeft = this.scrollLeft;
        });
    })();
});

/* Self-invoking function */
(function main() {
})();