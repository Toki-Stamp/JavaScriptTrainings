/**
 * Created by Fomichev Yuri on 28.09.2017
 * Contact me at : toki.stamp@gmail.com
 */
$(document).ready(function main() {
    /* Переменные быстрого доступа */
    var $search = $('#search-line-input'),
        $address = $('#address-output-line'),
        $autocomplete = $('#autocomplete-list'),
        list = ['Авакяна', 'Бобцова', 'Вишневского',
            'Жудро', 'Рыбачко', 'Умека', 'Калека', 'Базяка',
            'Чмарко', 'Смоленская', 'Тихонова', 'Фомкина'];
    /* Кпонки выбора АТЕ и ТЕ */
    $('#radio-buttons-container').find('button').click(function () {
        var $button = $(this),
            $input = $search.val();
        $button.removeClass('btn-default').addClass('btn-success');
        $button.siblings().removeClass('btn-success').addClass('btn-default');
        fadeFocus();
        $address.val($input + ' : ' + $button.text());
    });
    /* Кпопка очистки поля для ввода, крестик */
    $('#clear-search-line-button').click(function () {
        var $button = $('radio-buttons-container').find('button.btn-success');
        $search.val('');
        $address.val('');
        $button.removeClass('btn-success').addClass('btn-default');
        $search.focus();
    });
    /* Кпопка очистки строки автозаполнения, крестик */
    $('#clear-autocomplete-button').on('keypress click', function () {
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
        $address.val($search.val());
        $search.focus();
    });
    /* Создание и настройка диалогового окна */
    $('#dialog-container').dialog({
        //height: '710', minHeight: '700', maxHeight: '720',
        width: '750',
        //minWidth: '760', maxWidth: '780',
        resizable: false,
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
    $('#open-autocomplete-list-button').on('keypress click', function () {
        searchAutocomplete();
    });
    /* Кпонка копирования строки адреса */
    $('#copy-output-button').on('keypress click', function () {
        fadeFocus();
    });
    /* Создание и настройка авто-завершения ввода */
    $autocomplete.autocomplete({
        minLength: 0,
        source: list,
        response: function (event, ui) {
            var $target = $(this).parent();
            if ((ui.content.length === 0) && (!$target.hasClass('has-error'))) {
                $target.addClass('has-error');
                $target.children().addClass('error-input');
            } else if ((ui.content.length > 0) && ($target.hasClass('has-error'))) {
                $target.removeClass('has-error');
                $target.children().removeClass('error-input');
            }
        }
    });
    /* События по нажатию клавиши / клику мышкой по полю авто-завершения */
    $autocomplete.on('keypress click', function () {
        searchAutocomplete();
    });

    $('#add-as-address-button').click(function () {
        setDialogName('Добавить как адрес');
    });
    $('#add-as-place-button').click(function () {
        setDialogName('Добавить как местоположение');
    });

    /* Прячем фокус */
    function fadeFocus() {
        $('#dialog-container').parent().focus();
    }

    /* Запускаем поиск по полю авто-завершения */
    function searchAutocomplete() {
        $autocomplete.focus().autocomplete('search');
    }

    /* Настройка имени диалога */
    function setDialogName(name) {
        $('#dialog-container').dialog('option', 'title', name);
        fadeFocus();
    }
});