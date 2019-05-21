/**
 * Created by Fomichev Yuri on 21.05.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function sif() {
    class MyClass {
        constructor() {
            this.text = 'Default text...';
        }

        get text() {
            console.log('Getter for text!');
        }

        set text(v) {
            console.log('Setter for text!');
        }
    }

    const object = new MyClass();

    console.log('sif');
    object.text = 15;
    console.log(object.text);
})();