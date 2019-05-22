/**
 * Created by Fomichev Yuri on 21.05.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function () {
    var rhAlert       = window['rh_utils'].alert.getInstance(),
        buttons       = $('#x-controls').find('.btn-group').find('button'),
        setTitle      = $('#set-title'),
        setMessage    = $('#set-message'),
        messages      = [
            'Внимание!!!\n',
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
        };
    
    buttons.first().on('click', function (e) {
        window.alert('Hello, World!');
    });
    
    buttons.last().on('click', function (e) {
        var message = setMessage.find('input').val();
        
        if (!message || (message && !message.length)) {
            message = messages[randomInteger(0, (messages.length - 1))];
        }
        
        rhAlert.create().message(message).show().status();
    });
    
    setTitle.find('button').first().on('click', function (e) {
        rhAlert.title(setTitle.find('input').val());
    });
    setTitle.find('button').last().on('click', function (e) {
        setTitle.find('input').val('');
        rhAlert.title(null);
    });
    
    setMessage.find('button').first().on('click', function (e) {
        var message = setMessage.find('input').val();
        
        if (!message || (message && !message.length)) {
            message = messages[randomInteger(0, (messages.length - 1))];
        }
        
        rhAlert.message(message);
    });
    setMessage.find('button').last().on('click', function (e) {
        rhAlert.message(null);
        setMessage.find('input').val('');
    });
})();