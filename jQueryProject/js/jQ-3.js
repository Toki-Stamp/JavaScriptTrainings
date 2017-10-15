/**
 * Created by Fomichev Yuri on 14.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
console.log('document-load');
jQuery(document).ready(function main() {
    console.log('document-ready');
    $('#result-table').find('tbody').find('tr').on('click', function () {
        $(this).addClass('success');
        $(this).siblings().removeClass('success');
    });
    $('.open-modal').click(function () {
        console.log('modal-open');
        openModal();
    });
    $('.close-modal, .close').click(function () {
        console.log('button-click-modal-close');
        closeModal();
    });
    $('.my-focus').on({
        focus: function (event) {
            console.log('target: "' + event.target.innerText.trim() + '" : focus');
        },
        blur: function () {
            console.log('target: "' + event.target.innerText.trim() + '" : blur');
        },
        click: function (event) {
            console.log('target: "' + event.target.innerText.trim() + '" : click');
        }
    });
    $('.side-effect').on({
        click: function () {
            console.log('side-effect-click');
        },
        focus: function () {
            console.log('side-effect-focus');
        },
        blur: function () {
            console.log('side-effect-blur');
        }
    });
}).keydown(function (event) {
    var $body = $('body'),
        isTabkeyAble = ($body.attr('tabkey-able') === 'false'),
        isModalOpened = ($body.attr('modal-open') === 'true');
    if (event) {
        if (event.keyCode === 9 /* tab */ && isTabkeyAble) {
            console.log('tab-key-prevent');
            event.preventDefault();
        }
        if (event.keyCode === 27 /* escape */ && isModalOpened) {
            console.log('escape-key-modal-close');
            closeModal();
        }
    }
    console.log('event-keydown');
});

function fillTableContent() {
    $('#loader-container').show();
    setTimeout(function () {
        /* Функция, потребляющая время */
        var data = 'Строка адреса для теста формы вывода результатов поиска ',
            tableSize = 2000;
        for (var i = 1; i <= tableSize; i++) {
            $('#result-table').find('tbody').append('<tr id="result-' + i + '"><td>' + data + i + '</td></tr>');
        }
        console.log('table-content-ready');
        $('#loader-container').fadeOut('fast');
    }, 0);
}

function openModal() {
    // $('#dialog-container').dialog('close').on('dialogclose', function /* регистрируем callback функцию по завершнию события dialogclose */(event, ui) {
    //     $('.my-focus').focus();
    // });
    $('#dialog-container').dialog('close').on('dialogclose', function () {
        fillTableContent();
        $('.my-modal-container').fadeIn('fast', function /* регистрируем callback функцию по завершнию события fadeIn */() {
            $('body').attr({
                'tabkey-able': 'false',
                'modal-open': 'true'
            });
            console.log('fade-in-complete');
        });
    });
}

function closeModal() {
    // $('#dialog-container').dialog('open').on('dialogopen dialogcreate', function /* регистрируем callback функцию по завершнию события dialogopen */(event, ui) {
    //     console.log('dialog-open-create-open-modal-focus');
    //     $('.open-modal').focus();
    // });
    $('#dialog-container').dialog('open');
    $('.my-modal-container').fadeOut('fast', function /* регистрируем callback функцию по завершнию события fadeOut */() {
        $('body').attr({
            'tabkey-able': 'true',
            'modal-open': 'false'
        });
        console.log('fade-out-complete');
    });
}
