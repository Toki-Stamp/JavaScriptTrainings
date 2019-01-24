/* jQuery */
jQuery(document).ready(function main() {
    /**
     *  Добавляем атрибут data-label ко всем элементам td,
     *  со значением взятым из th (#name) того же столбца, в котором находится td.
     *  Используется для создания меток ячеек таблицы при минималистичном отображении
     * */
    $('.main-table td').each(function (index, item) {
        $(item).attr('data-label', (function () {
            let map = {};

            $('.main-table #name th').each(function (index, item) {
                if (!map.hasOwnProperty(map[index])) {
                    map[index] = item.textContent;
                }
            });

            return map;
        })()[item.cellIndex])
    });

    $('.main-table').on('click', 'tbody tr', function (e) {
        $(e.currentTarget).addClass('active').siblings().removeClass('active');
    });
});

/* Self-invoking function */
(function main() {
})();