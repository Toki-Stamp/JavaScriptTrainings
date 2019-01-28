/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    (function ellipsizeTextBox() {
        let element      = document.getElementById('version-3'),
            originalText = element.innerText,
            wordsArray   = originalText.split(/\s/),
            truncatedText,
            timeout;

        element.setAttribute('data-original-text', originalText);

        while (element.scrollHeight > element.offsetHeight) {
            wordsArray.pop();
            element.innerText = wordsArray.join(' ') + '...'
        }

        truncatedText = element.innerText;

        console.log({'original': originalText, 'truncated': truncatedText});

        element.addEventListener('mouseover', function () {
            clearTimeout(timeout);
            timeout           = null;
            element.innerText = originalText;
        });
        element.addEventListener('mouseout', function () {
            timeout = setTimeout(function () {
                element.innerText = truncatedText;
                clearTimeout(timeout);
                timeout = null;
            }, 500);
        });
    })();
});

// (function ellipsizeTextBox(id) {
//     var el = document.getElementById(id);
//     var wordArray = el.innerHTML.split(' ');
//
//     while (el.scrollHeight > el.offsetHeight) {
//         wordArray.pop();
//         el.innerHTML = wordArray.join(' ') + '...';
//     }
// })('version-3');