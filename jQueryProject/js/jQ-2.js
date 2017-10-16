/**
 * Created by Fomichev Yuri on 28.09.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {
    var $autocomplete2 = $('#autocomplete-2'),
        $search = $('#search-line-input'),
        $address = $('#address-output-line'),
        list = ['Авакяна', 'Бобцова', 'Вишневского',
            'Жудро', 'Рыбачко', 'Умека', 'Калека', 'Базяка',
            'Чмарко', 'Смоленская', 'Тихонова', 'Фомкина'];

    /* -------------------------------------- ОБРАБОТЧИКИ КНОПОК ------------------------------------ */
    /* Обработчик на клик по всем кнопкам */
    // $('button, input[type="button"]').on('click', function () {
    //     document.activeElement.blur();
    //     // fadeFocus();
    // });
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
        log($autocomplete2.autocomplete('option', 'minLength'));
        $autocomplete2.val('');
        $autocomplete2.parent().removeClass('has-error');
        $autocomplete2.removeClass('error-input');
    });
    /* Кнопке раскрытия списка авто-завершения */
    $('#open-autocomplete-2-list-button').on('keypress click', function () {
        searchAutocomplete($autocomplete2);
    });
    /* --------------------------------- ДИАЛОГОВЫЕ / МОДАЛЬНЫЕ ОКНА -------------------------------- */
    /* Создание и настройка диалогового окна */
    $('#dialog-container').dialog({
        //height: '710', minHeight: '700', maxHeight: '720',
        width: '750',
        //minWidth: '760', maxWidth: '780',
        resizable: false,
        modal: true,
        closeOnEscape: true,
        closeText: "Закрыть диалоговое окно",
        autoOpen: true, // false после отладки!!!
        stack: false,
        show: {effect: "fade", duration: 300},
        hide: {effect: "fade", duration: 300},
        position: {my: "center top", at: "center top", of: window},
        open: function () {
            $(this).parent().focus();
        },
        close: function () {
            /* пока пусто */
        }
    });
    /* ------------------------------------- ФОРМЫ АВТОЗАВЕРШЕНИЯ ----------------------------------- */
    /* Создание и настройка авто-завершения ввода */
    $autocomplete2.autocomplete({
        minLength: 3,
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
    }).on('keyup', function () {
        if (!$autocomplete2.value) {
            log('empty-autocomplete-2');
            // $autocomplete2.parent().removeClass('has-error');
            // $autocomplete2.removeClass('error-input');
        }
    });
    /* ---------------------------------------- ПРОЧИЕ ФУНКЦИИ -------------------------------------- */

    /* Запускаем поиск по полю авто-завершения */
    function searchAutocomplete(target) {
        target.autocomplete('option', 'minLength', 0).focus().autocomplete('search').autocomplete('option', 'minLength', 3);
    }

    /* Настройка имени диалога */
    function setDialogName(name) {
        $('#dialog-container').dialog('option', 'title', name);
    }

    function log(message) {
        console.log(message);
    }
});