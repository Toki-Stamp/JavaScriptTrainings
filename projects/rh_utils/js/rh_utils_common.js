jQuery(document).ready(function main() {
    var shield = window['rh_utils'].shield.getNewInstance().create();
    
    $('.grid-cell').click(function () {
        var me       = $(this),
            siblings = me.siblings().filter('.active-cell');
        
        siblings.removeClass('active-cell');
        shield.bind(siblings).decline();
        
        me.addClass('active-cell');
        shield.bind(me).message(me.text()).rise().status()
    });
});