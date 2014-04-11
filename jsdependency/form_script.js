/// <reference path="jquery-2.1.0.intellisense.js" />
/// <reference path="XrmPage-vsdoc.js" />
/// <reference path="require.js" />
define(['common_script', 'lodash'], function (common) {
    console.log('loading form_script.js');
    var form = {
        onSave: function(context) {
            common.log('onSave');
            common.log(context);
        },
        onLoad: function() {
            common.log('onLoad');
            console.log(_.first([2,3,4]));
            Xrm.Page.data.entity.addOnSave(this.onSave);
            Xrm.Page.getAttribute('emailaddress1').addOnChange(function(context) {
                Xrm.Page.ui.setFormNotification('Email Address has changed', 'INFO', '1');
            });
        }
    };
    form.onLoad();
    return form;
});