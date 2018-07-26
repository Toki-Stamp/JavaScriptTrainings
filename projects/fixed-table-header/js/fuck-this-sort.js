/**
 * Created by Fomichev Yuri on 26.07.2018
 * Contact me at : toki.stamp@gmail.com
 */
(function () {
    let data  = {
            "Наружная площадь"                   : {"value": 2400, "key": 7},
            "Год постройки"                      : {"value": "", "key": 301},
            "Площадь застройки"                  : {"value": 2400, "key": 282},
            "Общая стоимость работ"              : {"value": 1111, "key": 125},
            "Материал наружных стен"             : {"value": "", "key": 283},
            "Наименование"                       : {"value": "ТЫЦ-ТЫДЫЦ", "key": 157},
            "Стоимость выполненных работ"        : {"value": 111, "key": 124},
            "Готовность"                         : {"value": 0, "key": 27},
            "Главное строение"                   : {"value": "Да", "key": 70},
            "Признаки самовольного строительства": {"value": "Нет", "key": 150},
            "Методы определения готовности"      : {"value": "Готовность по элементам", "key": 90},
            "Составная часть главного строения"  : {"value": "", "key": 71},
            "№ таблицы УПВС"                     : {"value": "", "key": 372},
            "Вид конструкции здания"             : {"value": "Каркас металлический", "key": 72},
            "Объем"                              : {"value": 0, "key": 6},
            "Дата приемки в эксплуатацию"        : {"value": "", "key": 252},
            "Литер"                              : {"value": "А", "key": 151},
            "Физический износ"                   : {"value": 0, "key": 5}
        },
        order = [301, 252, 9, 10, 19, 283, 72, 151, 150, 372];

    let orderObject = {
            default: Infinity // поднимаем сортируемые элементы в самый верх
        },
        sortedData  = [];

    /* подготавливаю массив сортируемых элементов */
    for (let level_1_key in data) {
        let object;

        if (data.hasOwnProperty(level_1_key)) {
            object = {name: level_1_key};

            for (let level_2_key in data[level_1_key]) {
                if (data[level_1_key].hasOwnProperty(level_2_key)) {
                    object[level_2_key] = data[level_1_key][level_2_key];
                }
            }

            sortedData.push(object);
        }
    }
    /* строю правило сортировки, !обязательно! первый порядок = 1, а не 0 */
    for (let i = 1, size = order.length; i <= size; i += 1) {
        orderObject[order[i - 1]] = i;
    }

    /* собственно сортирую */
    sortedData.sort(function (a, b) {
        return (
            (orderObject[a.key] || orderObject.default)
            -
            (orderObject[b.key] || orderObject.default)
        );
    });
})();