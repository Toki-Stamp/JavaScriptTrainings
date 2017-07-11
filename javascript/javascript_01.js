/**
 * Created by Fomichev Yuri on 08.07.2017
 * Contact me at : toki.stamp@gmail.com
 */

document.body.style.background = 'red';

function changeBGColor() {
    if (document.body.style.background === 'red') {
        document.body.style.background = 'green';
    } else if (document.body.style.background === 'green') {
        document.body.style.background = 'blue';
    } else if (document.body.style.background === 'blue') {
        document.body.style.background = 'yellow';
    } else if (document.body.style.background === 'yellow') {
        document.body.style.background = 'red';
    }
}

