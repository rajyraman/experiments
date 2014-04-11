/// <reference path="require.js" />
define(['jquery', 'lodash'], function ($, _) {
    console.log('loading common_script.js');
    return {
        log: function(message) {
            if (console && console.log) {
                console.log(message);
            } else {
                alert(message);
            }
        }
    };
});