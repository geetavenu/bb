define([
    'jquery',
    'underscore',
    'backbone'
],function($, _,
           Backbone) {

var Person = Backbone.Model.extend({
    urlRoot: "persons"
});
   return Person;
});
