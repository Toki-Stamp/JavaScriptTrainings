/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var dataContainer   = $('#data-container'),
        data,
        key,
        text,
        index,
        addAttribute    = $('#add-data-attribute'),
        removeAttribute = $('#remove-data-attribute'),
        attributeName   = $('#data-attribute-name'),
        attributeValue  = $('#data-attribute-value'),
        addAlert        = function (msg, alertType) {
            var alertContainer = $('#alert-container');
            if (msg && alertType) {
                alertContainer
                    .html(msg)
                    .addClass(alertType)
                    .css('visibility', 'visible');
                setTimeout(function () {
                    alertContainer
                        .css('visibility', 'hidden')
                        .removeClass(alertType)
                        .empty()
                }, 3000);
            }
        };

    data = dataContainer.data();
    dataContainer.empty();
    if (!$.isEmptyObject(data)) {
        index = 1;
        for (key in data) {
            if (data.hasOwnProperty(key)) {
                text = '';
                text += '<span class="number">' + (index++) + ') ' + '</span>';
                text += key;
                text += ' : ';
                text += data[key];
                text += '<br>';
                dataContainer.append(text);
            }
        }
    } else {
        dataContainer.append('Пусто...');
    }

    addAttribute.click(function () {
        var key   = attributeName.val(),
            value = attributeValue.val();

        if ((key && (/\S/.test(key))) && (value && (/\S/.test(value)))) {
            key   = key.replace(/\s/g, '');
            value = value.replace(/\s/g, '');
            dataContainer.data(key, value);
            addAlert('<strong>Внимание!<strong/> Новый атрибут успешно добавлен!', 'alert-success');
            data = dataContainer.data();
            console.log(data);
            dataContainer.empty();
            index = 1;
            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    text = '';
                    text += '<span class="number">' + (index++) + ') ' + '</span>';
                    text += key;
                    text += ' : ';
                    text += data[key];
                    text += '<br>';
                    dataContainer.append(text);
                }
            }
        } else {
            addAlert('<strong>Ошибка!<strong/> Неверные входные данные!', 'alert-danger');
        }
    });

    removeAttribute.click(function () {
        var key = attributeName.val();

        if (key && (/\S/.test(key))) {
            key = key.replace(/\s/g, '');
            dataContainer.removeData(key);
            addAlert('<strong>Внимание!<strong/> Атрибут "' + key + '" успешно удалён из коллекции!', 'alert-warning');
            data = dataContainer.data();
            console.log(data);
            dataContainer.empty();
            if (!$.isEmptyObject(data)) {
                index = 1;
                for (key in data) {
                    if (data.hasOwnProperty(key)) {
                        text = '';
                        text += '<span class="number">' + (index++) + ') ' + '</span>';
                        text += key;
                        text += ' : ';
                        text += data[key];
                        text += '<br>';
                        dataContainer.append(text);
                    }
                }
            } else {
                dataContainer.append('Пусто...');
            }
        } else {
            addAlert('<strong>Ошибка!<strong/> Неверные входные данные!', 'alert-danger');
        }
        attributeValue.val('');
    });
});