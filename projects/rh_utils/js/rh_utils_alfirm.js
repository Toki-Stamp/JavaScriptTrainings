/**
 * Created by Fomichev Yuri on 21.05.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function () {
    var alfirm        = window['rh_utils'].alfirm.getInstance(),
        shield        = window['rh_utils'].shield.getNewInstance().create(),
        controls      = $('.rh-controls').find('button'),
        setTitle      = $('#set-title'),
        setMessage    = $('#set-message'),
        messages      = [
            'Внимание!!!\n' +
            'Записи по данному объекту (внесено 1 помещение в отношении данного ИП) были внесены в экспликацию объекта ID 20246623.\n' +
            '\n' +
            'Таким образом, для удаления данного объекта, сперва необходимо удалить записи по нему в экспликации объекта ID 20246623.',
            'Внимание!!!\n' +
            'В базе актуальных объектов найден эквивалентый объект (ID 20246617) у которого совпадает:\n' +
            '   - Инвентарный номер (0/C-62);\n' +
            '\n' +
            'Таким образом, восстановление данного объекта невозможно.',
            'Внимание!!!\n' +
            'У данного объекта (ID 40337291) не завершена операция по удалению: \n' +
            '   - Заказ №100297746;\n' +
            '\n' +
            'Таким образом, создание повторной операции «Удаление объекта» невозможно.',
            'Внимание!!!\n' +
            'У данного объекта имеются связанные объекты (всего 71 шт):\n' +
            '   - ID 40236247;\n' +
            '   - ID 40236250;\n' +
            '   - ID 40236255;\n' +
            '   - ID 40236258;\n' +
            '   - ID 40236259;\n' +
            '   - ID 40236262;\n' +
            '   - ID 40236264;\n' +
            '   - ID 40236265;\n' +
            '   - ID 40236267;\n' +
            '   - ID 40236269;\n' +
            '   - ID 40236270;\n' +
            '   - ID 40236271;\n' +
            '   - ID 40237319;\n' +
            '   - ID 40237322;\n' +
            '   - ID 40237323;\n' +
            '   - ID 40237327;\n' +
            '   - ID 40237332;\n' +
            '   - ID 40237333;\n' +
            '   - ID 40237337;\n' +
            '   - ID 40237339;\n' +
            '   - ID 40237794;\n' +
            '   - ID 40237796;\n' +
            '   - ID 40237797;\n' +
            '   - ID 40237798;\n' +
            '   - ID 40237799;\n' +
            '   - ID 40237800;\n' +
            '   - ID 40237801;\n' +
            '   - ID 40237802;\n' +
            '   - ID 40237804;\n' +
            '   - ID 40237805;\n' +
            '   - ID 40237806;\n' +
            '   - ID 40237807;\n' +
            '   - ID 40237809;\n' +
            '   - ID 40237810;\n' +
            '   - ID 40237811;\n' +
            '   - ID 40237812;\n' +
            '   - ID 40237814;\n' +
            '   - ID 40237815;\n' +
            '   - ID 40237816;\n' +
            '   - ID 40237817;\n' +
            '   - ID 40237818;\n' +
            '   - ID 40237819;\n' +
            '   - ID 40237820;\n' +
            '   - ID 40237821;\n' +
            '   - ID 40237822;\n' +
            '   - ID 40237823;\n' +
            '   - ID 40237824;\n' +
            '   - ID 40237825;\n' +
            '   - ID 40237847;\n' +
            '   - ID 40237848;\n' +
            '   - ID 40237849;\n' +
            '   - ID 40237850;\n' +
            '   - ID 40237851;\n' +
            '   - ID 40237854;\n' +
            '   - ID 40237857;\n' +
            '   - ID 40237859;\n' +
            '   - ID 40237861;\n' +
            '   - ID 40237863;\n' +
            '   - ID 40237865;\n' +
            '   - ID 40237869;\n' +
            '   - ID 40240896;\n' +
            '   - ID 40240899;\n' +
            '   - ID 40240903;\n' +
            '   - ID 40240906;\n' +
            '   - ID 40240908;\n' +
            '   - ID 40240909;\n' +
            '   - ID 40240912;\n' +
            '   - ID 40240914;\n' +
            '   - ID 40240918;\n' +
            '   - ID 40240922;\n' +
            '   - ID 40240923;\n' +
            '\n' +
            'Таким образом, для удаления данного объекта, сперва необходимо удалить (либо назначить нового родителя) всем его связанным объектам.'
        ],
        randomInteger = function (min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1);

            return Math.round(rand);
        },
        test1         = {},
        test2         = [],
        test3         = function () {
        },
        test4         = '1',
        test5         = 1;

    /* standard */
    controls.eq(0).on('click', function (e) {
        window.alert(messages[randomInteger(0, (messages.length - 1))]);
    });
    controls.eq(1).on('click', function (e) {
        var userReply = window.confirm(messages[randomInteger(0, (messages.length - 1))]);

        if (userReply) {
            alert('OK');
        } else {
            alert('Cancel or ESC');
        }
    });
    /* alerts */
    controls.eq(2).on('click', function (e) {
        var message = setMessage.find('input').val(),
            title   = setTitle.find('input').val();

        if (!message || (message && !message.length)) {
            message = messages[randomInteger(0, (messages.length - 1))];
        }

        alfirm
            .title('Alert')
            .body(message)
            .show()
            .status();
    });
    controls.eq(3).on('click', function (e) {
        var message = setMessage.find('input').val(),
            title   = setTitle.find('input').val();

        if (!message || (message && !message.length)) {
            message = messages[randomInteger(0, (messages.length - 1))];
        }

        alfirm
            .title('Alert + Okay')
            .body(message)
            .okay(function () {
                console.error('Alfirm Only Okay Callback Function Begin!');
                console.log(test1);
                console.log(test2);
                console.log(test3);
                console.log(test4);
                console.log(test5);
                console.error('Alfirm Only Okay Callback Function End!');
            })
            .show()
            .status();
    });
    /* confirms */
    controls.eq(4).on('click', function (e) {
        var message = setMessage.find('input').val(),
            title   = setTitle.find('input').val();

        if (!message || (message && !message.length)) {
            message = messages[randomInteger(0, (messages.length - 1))];
        }

        alfirm
            .confirm(true)
            .title('Confirm + Okay')
            .body(message)
            .okay(function () {
                console.error('Alfirm Only Okay Callback Function Begin!');
                console.log(test1);
                console.log(test2);
                console.log(test3);
                console.log(test4);
                console.log(test5);
                console.error('Alfirm Only Okay Callback Function End!');
            })
            .show()
            .status();
    });
    controls.eq(5).on('click', function (e) {
        var message = setMessage.find('input').val(),
            title   = setTitle.find('input').val();

        if (!message || (message && !message.length)) {
            message = messages[randomInteger(0, (messages.length - 1))];
        }

        alfirm
            .confirm(true)
            .title('Confirm + Okay + Cancel')
            .body(message)
            .okay(function () {
                console.error('Alfirm Okay (Okay + Cancel) Callback Function Begin!');
                console.log(test1);
                console.log(test2);
                console.log(test3);
                console.log(test4);
                console.log(test5);
                console.error('Alfirm Okay (Okay + Cancel) Callback Function End!');
            })
            .cancel(function () {
                console.error('Alfirm Cancel (Okay + Cancel) Callback Function Begin!');
                console.log(test1);
                console.log(test2);
                console.log(test3);
                console.log(test4);
                console.log(test5);
                console.error('Alfirm Cancel (Okay + Cancel) Callback Function End!');
            })
            .show()
            .status();
    });
    /* multi */
    controls.eq(6).on('click', function (e) {
        var message = setMessage.find('input').val();

        if (!message || (message && !message.length)) {
            message = messages[randomInteger(0, (messages.length - 1))];
        }

        shield
            .bind($('body'))
            .show();
        alfirm
            .confirm(true)
            .title('Confirm + Okay, Then Alert')
            .body(message)
            .okay(function () {
                alfirm
                    .title('Alert Okay!')
                    .body('Confirmed!')
                    .okay(function () {
                        shield
                            .hide()
                    })
                    .show();
                
            })
            .cancel(function () {
                shield
                    .hide();
            })
            .show()
    });
    controls.eq(7).on('click', function (e) {
        var message = setMessage.find('input').val();

        if (!message || (message && !message.length)) {
            message = messages[randomInteger(0, (messages.length - 1))];
        }

        alfirm
            .confirm(true)
            .title('Confirm + Okay + Cancel, Then Okay Alert Or Cancel Alert')
            .body(message)
            .okay(function () {
                alfirm
                    .title('Alert Okay!')
                    .body('Confirmed!')
                    .show()
            })
            .cancel(function () {
                alfirm
                    .title('Alert Cancel!')
                    .body('Declined!')
                    .show()
            })
            .show()
    });
    /* setters */
    setTitle.find('button').on('click', function (e) {
        setTitle.find('input').val('');
    });
    setMessage.find('button').on('click', function (e) {
        setMessage.find('input').val('');
    });
})();