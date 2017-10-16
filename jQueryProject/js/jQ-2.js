/**
 * Created by Fomichev Yuri on 28.09.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {
    var list = ['Авакяна', 'Бобцова', 'Вишневского', 'Жудро', 'Рыбачко', 'Умека', 'Калека', 'Базяка', 'Чмарко', 'Смоленская', 'Тихонова', 'Фомкина'];

    /* -------------------------------------- ОБРАБОТЧИКИ КНОПОК ------------------------------------ */
    /* Кпонки выбора АТЕ и ТЕ */
    $('#radio-buttons-container').find('button').on('keypress click', function () {
        $(this).removeClass('btn-default').addClass('btn-success');
        $(this).siblings().removeClass('btn-success').addClass('btn-default');
    });
    $('#clear-currently-selected').on('click', function () {
        $('#apply-choice-button').prop('disabled', true).removeClass('btn-success').addClass('btn-default');
        $('#currently-selected').val('');
        $('#search-results-container').find('tr.success').removeClass('success');
    });
    /* Кнопка раскрытия списка авто-завершения */
    $('#open-autocomplete-2-list-button').on('keypress click', function () {
        var $target = $('#autocomplete-2'),
            $text = $target.val();
        $target.autocomplete('search', $text);
    });
    /* --------------------------------- ДИАЛОГОВЫЕ / МОДАЛЬНЫЕ ОКНА -------------------------------- */
    /* Создание и настройка диалогового окна */
    $('#dialog-container').dialog({
        //height: '710', minHeight: '700', maxHeight: '720',
        width: '750', //minWidth: '760', maxWidth: '780',
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
    $('#open-modal').click(function () {
        openModal();
    });
    $('.close-modal, .close').click(function () {
        closeModal();
    });
    /* ------------------------------------- ФОРМЫ АВТОЗАВЕРШЕНИЯ ----------------------------------- */
    /* Создание и настройка авто-завершения ввода 1 */
    $('#autocomplete-1').on('keyup', function () {
        var $target = $(this).parent(),
            $input = $(this).val();
        if (!$input && $target.hasClass('has-error')) {
            $target.removeClass('has-error');
            $target.children().removeClass('error-input');
        }
    }).autocomplete({
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
    });
    /* Создание и настройка авто-завершения ввода 2 */
    $('#autocomplete-2').autocomplete({
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

    $('#search-results-container').on('click', "#results-table tr", function () {
        var $currentlySelected = $('#currently-selected'),
            $applyChoiceButton = $('#apply-choice-button');
        if ($applyChoiceButton.hasClass('btn-default')) {
            $applyChoiceButton.prop('disabled', false).removeClass('btn-default').addClass('btn-success');
        }
        $currentlySelected.val($(this).find('td').text());
        $(this).addClass('success');
        $(this).siblings().removeClass('success');
    });

    /* Принудительно запускаем поиск по полю авто-завершения 2 */
    function searchAutocomplete() {
        $('#autocomplete-2').autocomplete('option', 'minLength', 0).focus().autocomplete('search').autocomplete('option', 'minLength', 3);
    }

    /* Заполнение таблицы результатов поиска */
    function fillTableContent() {
        $('#loader-container').show();
        setTimeout(function () {
            /* Действия, потребляющие значительное время */
            var data = 'Строка адреса для теста формы вывода результатов поиска ',
                tableSize = 100;
            for (var i = 1; i <= tableSize; i++) {
                $('#search-results-container').find('tbody').append('<tr id="result-' + i + '" class="non-selectable"><td>' + data + i + '</td></tr>');
            }
            $('#loader-container').fadeOut('slow');
        }, 0);
    }

    function clearTableContent() {
        $('#search-results-container').find('tbody').empty();
        $('#currently-selected').val('');
        $('#apply-choice-button').prop('disabled', true).removeClass('btn-success').addClass('btn-default');
    }

    function openModal() {
        $('#dialog-container').dialog('close');
        fillTableContent();
        $('#modal-container').fadeIn('slow', function /* регистрируем callback функцию по завершнию события fadeIn */() {
            $('body').attr({
                'tabkey-able': 'false',
                'modal-open': 'true'
            });
        });
    }

    function closeModal() {
        clearTableContent();
        $('#dialog-container').dialog('open');
        $('#modal-container').fadeOut('fast', function /* регистрируем callback функцию по завершнию события fadeOut */() {
            $('body').attr({
                'tabkey-able': 'true',
                'modal-open': 'false'
            });
        });
    }

    /* Настройка имени диалога */
    function setDialogName(name) {
        $('#dialog-container').dialog('option', 'title', name);
    }

    function log(message) {
        console.log(message);
    }

    function dir(object) {
        console.dir(object);
    }

}).keydown(function (event) {
    var $body = $('body'), isTabkeyAble = ($body.attr('tabkey-able') === 'false'), isModalOpened = ($body.attr('modal-open') === 'true');
    if (event) {
        if (event.keyCode === 9 /* tab */ && isTabkeyAble) {
            event.preventDefault();
        }
        if (event.keyCode === 27 /* escape */ && isModalOpened) {
            closeModal();
        }
    }
});