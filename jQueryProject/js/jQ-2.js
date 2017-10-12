/**
 * Created by Fomichev Yuri on 28.09.2017
 * Contact me at : toki.stamp@gmail.com
 */
$(document).ready(function main() {
    var $autocomplete2 = $('#autocomplete-2'),
        $search = $('#search-line-input'),
        $address = $('#address-output-line'),
        $modal = $('search-results-modal'),
        list = ['Авакяна', 'Бобцова', 'Вишневского',
            'Жудро', 'Рыбачко', 'Умека', 'Калека', 'Базяка',
            'Чмарко', 'Смоленская', 'Тихонова', 'Фомкина'];

    /* -------------------------------------- ОБРАБОТЧИКИ КНОПОК ------------------------------------ */
    /* Обработчик на клик по всем кнопкам */
    $('button, input[type="button"]').on('click', function () {
        fadeFocus();
    });
    /* Кпонки выбора АТЕ и ТЕ */
    $('#radio-buttons-container').find('button').on('keypress click', function () {
        var $button = $(this),
            $input = $search.val();
        $button.removeClass('btn-default').addClass('btn-success');
        $button.siblings().removeClass('btn-success').addClass('btn-default');
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
    /* Кпопка очистки строки автозаполнения 2, крестик */
    $('#clear-autocomplete-2-button').on('keypress click', function () {
        $autocomplete2.val('');
        $autocomplete2.parent().removeClass('has-error');
        $autocomplete2.removeClass('error-input');
        $autocomplete2.focus();
    });
    /* Кнопке раскрытия списка авто-завершения */
    $('#open-autocomplete-2-list-button').on('keypress click', function () {
        searchAutocomplete();
    });
    /* --------------------------------------------- */
    $('#add-as-address-button').click(function () {
        setDialogName('Добавить как адрес');
    });
    /* --------------------------------------------- */
    $('#add-as-place-button').click(function () {
        setDialogName('Добавить как местоположение');
    });
    /* --------------------------------- ДИАЛОГОВЫЕ / МОДАЛЬНЫЕ ОКНА -------------------------------- */
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
    /* Создание и настройка модального окна результатов поиска */
    $('#search-results-modal').modal({
        backdrop: 'static',
        show: false,
        keyboard: true
    });
    /* ------------------------------------- ФОРМЫ АВТОЗАВЕРШЕНИЯ ----------------------------------- */
    /* Создание и настройка авто-завершения ввода */
    $autocomplete2.autocomplete({
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
    /* ---------------------------------------- ПРОЧИЕ ФУНКЦИИ -------------------------------------- */
    /* Прячем фокус */
    function fadeFocus() {
        $('#dialog-container').parent().focus();
    }

    /* Запускаем поиск по полю авто-завершения */
    function searchAutocomplete() {
        $autocomplete2.focus().autocomplete('search');
    }

    /* Настройка имени диалога */
    function setDialogName(name) {
        $('#dialog-container').dialog('option', 'title', name);
    }
});