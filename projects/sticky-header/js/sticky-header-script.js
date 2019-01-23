/**
 * Created by Fomichev Yuri on 05.01.2019
 * Contact me at : toki.stamp@gmail.com
 */

$(window).on('scroll', function () {
   if ($(window).scrollTop()) {
       $('nav').addClass('black');
   } else {
       $('nav').removeClass('black');
   }
});