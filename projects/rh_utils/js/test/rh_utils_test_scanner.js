/**
 * Created by Fomichev Yuri on 28.05.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function sif() {
    var content = $("#mainTableCont");

    content.on('click', 'tbody tr', function (e) {
        const self = $(this);

        self.addClass('success').siblings().removeClass('success');
        console.log({event: e, 'this': self});
    });

    console.log(jQuery._data(content.get(0), 'events'));
})();