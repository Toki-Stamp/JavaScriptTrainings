/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    (function ellipsizeTextBox_2(item) {
        let element      = item.get(0),
            originalText = element.innerText,
            wordsArray   = originalText.split(/\s/),
            truncatedText,
            timeout;
        
        item.attr('data-original-text', originalText);
        
        while (element.scrollHeight > element.offsetHeight) {
            wordsArray.pop();
            element.innerText = wordsArray.join(' ') + '...'
        }
        
        truncatedText = element.innerText;
        
        console.log({'original': originalText, 'truncated': truncatedText})
        
        item.on('mouseover', function () {
            clearTimeout(timeout);
            timeout = null;
            item.text(originalText);
        }).on('mouseout', function () {
            timeout = setTimeout(function () {
                item.text(truncatedText);
                clearTimeout(timeout);
                timeout = null;
            }, 500);
        })
        
    })($('#version-3'));
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