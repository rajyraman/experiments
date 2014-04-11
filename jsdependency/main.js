/// <reference path="require.js" />
var webResourceVersionNumber= '';
[].forEach.call(document.querySelectorAll('script'), function (element) {
    if (element.src.indexOf('main.js') > -1) {
        webResourceVersionNumber = element.src;
    }
});
webResourceVersionNumber = webResourceVersionNumber.replace(Xrm.Page.context.getClientUrl(), '').substr(1, 24);
if (!require) {
    var require = {
        //could also use undocumented WEB_RESOURCE_ORG_VERSION_NUMBER
        baseUrl: '/' + webResourceVersionNumber + '/WebResources/scripts_/form',
        shim: {
            'lodash': {
                exports: '_'
            }
        },
        deps: ['jquery', 'lodash', 'common_script', 'form_script'],
        callback: function() {
            console.log('callback before requirejs has been loaded');
        },
        paths: {
            jquery: '../library/jquery.min',
            lodash: '../library/lodash'
        },
        onError: function (err) {
            console.log(err.requireType);
            if (err.requireType === 'timeout') {
                console.log('modules: ' + err.requireModules);
            }
            throw err;
        }
    };
} else {
    require.config({
        baseUrl: '/' + webResourceVersionNumber + '/WebResources/scripts_/form',
        shim: {
            'lodash': {
                exports: '_'
            }
        },
        paths: {
            jquery: '../library/jquery.min',
            lodash: '../library/lodash'
        },
        onError: function (err) {
            console.log(err.requireType);
            if (err.requireType === 'timeout') {
                console.log('modules: ' + err.requireModules);
            }
            throw err;
        }
    });
    require(['jquery', 'lodash', 'common_script', 'form_script'], function() {
        console.log('callback after requirejs has been loaded');
    });
}