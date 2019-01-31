/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

$(document).ready(function main() {
    $('.x-box').find('button').on('click', function () {
        $('[role="textbox"]')
            .empty()
            .text($('.x-box').find('input').val());
    });
});

/*jQuery(document).ready(function main() {
    let element = document.getElementsByClassName('box').item(0),
        text    = element ? element.innerText : null,
        words,
        word;

    if (text) {
        words             = text.split(/\s/);
        element.innerHTML = '';
    }

    console.log({'text': text, 'words': words});

    while (words && words.length) {
        let div  = document.createElement('div'),
            line = [];

        div.style.display = 'none';

        word = words.shift();
        line.push(word);
        div.appendChild(document.createTextNode(line.join(' ')));


        element.appendChild(div);

        console.log({
            'element offsetWidth': element.offsetWidth,
            'element scrollWidth': element.scrollWidth,
            'div offsetWidth':     div.offsetWidth,
            'div scrollWidth':     div.scrollWidth,
        });

        console.log({'word': word, 'words': words});
    }
});*/

// (function ellipsizeTextBox(id) {
//     var el = document.getElementById(id);
//     var wordArray = el.innerHTML.split(' ');
//
//     while (el.scrollHeight > el.offsetHeight) {
//         wordArray.pop();
//         el.innerHTML = wordArray.join(' ') + '...';
//     }
// })('version-3');