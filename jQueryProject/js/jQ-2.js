/**
 * Created by Fomichev Yuri on 28.09.2017
 * Contact me at : toki.stamp@gmail.com
 */
$(document).ready(function main() {
    /* Переменные быстрого доступа */
    var $search = $('#search-string'),
        $address = $('#address-container').find('.panel'),
        $autocomplete = $('#autocomplete-container').find('input'),
        list = ['Авакяна', 'Бобцова', 'Вишневского',
            'Жудро', 'Рыбачко', 'Умека', 'Калека', 'Базяка',
            'Чмарко', 'Смоленская', 'Тихонова', 'Фомкина'];
    /* Кпонки выбора АТЕ и ТЕ */
    $('#buttons-container').find('button').click(function () {
        var $button = $(this),
            $input = $('#search-string').val();
        $button.removeClass('btn-default').addClass('btn-success');
        $button.siblings().removeClass('btn-success').addClass('btn-default');
        fadeFocus();
        $address.html('<strong>' + $input + ' : ' + $button.text() + '</strong>');
    });
    /* Кпопка очистки поля для ввода, крестик */
    $('#clear-search-string-button').click(function () {
        var $button = $('#buttons-container').find('button.btn-success');
        $search.val('');
        $address.html('<strong>Строка адреса</strong>');
        $button.removeClass('btn-success').addClass('btn-default');
        $search.focus();
    });
    /* Кпопка очистки строки автозаполнения, крестик */
    $('#clear-autocomplete-button').click(function () {
        var $input = $('#autocomplete-list').val('');
        if (!$input) {
            console.dir($input);
        }
        $autocomplete.parent().removeClass('has-error');
        $autocomplete.removeClass('error-input');
        $autocomplete.focus();
    });
    /* Кнопка поиска, лупа */
    $('#find-button').click(function () {
        $address.html('<strong>' + $search.val() + '</strong>');
        $search.focus();
    });
    /* Создание и настройка диалогового окна */
    $('#dialog').dialog({
        //height: '710', minHeight: '700', maxHeight: '720',
        width: '770', minWidth: '760', maxWidth: '780',
        modal: true,
        autoOpen: true, // false после отладки!!!
        stack: false,
        show: {effect: "fade", duration: 300},
        hide: {effect: "fade", duration: 300},
        position: {my: "center top", at: "center top", of: window},
        open: function () {
            fadeFocus();
        },
        close: function () {
            /* пока пусто */
        }
    });
    /* Кнопка открытия окна авто-завершения */
    $('#open-autocomplete-list-button').click(function () {
        searchAutocomplete();
    });
    /* Создание и настройка авто-завершения ввода */
    $autocomplete.autocomplete({
        minLength: 0,
        source: list,
        response: function (event, ui) {
            var $target = $(this).parent();
            if ((ui.content.length === 0) && (!$target.hasClass('has-error'))) {
                $target.addClass('has-error');
                $target.children('input').addClass('error-input');
            } else if ((ui.content.length > 0) && ($target.hasClass('has-error'))) {
                $target.removeClass('has-error');
                $target.children('input').removeClass('error-input');
            }
        }
    });
    /* События по нажатию клавиши / клику мышкой / получению фокуса */
    $autocomplete.on('keypress click', function () {
        searchAutocomplete();
    });
    /* Прячем фокус */
    function fadeFocus() {
        $('#dialog').parent().focus();
    }

    /* Запускаем поиск по полю авто-завершения */
    function searchAutocomplete() {
        $autocomplete.focus().autocomplete('search');
    }
});