jQuery(document).ready(function main() {
    window['rh_utils'].shield
                      .getNewInstance()
                      .create()
                      .bind($('body'))
                      .show();
});