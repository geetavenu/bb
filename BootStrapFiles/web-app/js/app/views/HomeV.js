define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/HomeT.html'),
        PersonDetailsV =      require('app/views/PersonDetailsV'),
        Person = require('app/collections/Persons'),

        template = _.template(tpl);
        console.log ('tpl is' + tpl);

    return Backbone.View.extend({
        el:'body',
        render: function () {
            this.$el.html(tpl);
            return this;
        }

    });

});