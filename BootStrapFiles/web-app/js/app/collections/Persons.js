/**
 * Created by vbangalo on 3/16/14.
 */
define([
    'jquery',
    'underscore',
    'app/collections/Person',
    'backbone'
], function ($, _, Person, Backbone) {
   var Persons = Backbone.Collection.extend({
        model: Person,
        url: "persons"
    });

    return Persons;
});
