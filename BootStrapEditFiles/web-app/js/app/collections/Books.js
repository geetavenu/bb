/**
 * Created with IntelliJ IDEA.
 * User: vbangalo
 * Date: 2/13/14
 * Time: 11:49 AM
 * To change this template use File | Settings | File Templates.
 */





define([
    'jquery',
    'underscore',
    'app/collections/Book',
    'backbone'
], function ($, _, Book, Backbone) {
   var Books = Backbone.Collection.extend({
        model: Book,
        url: "books",
        initialize: function () {
            console.log("in books model initialize");
            this.on('add', this.newBook, this);
            this.on('change', this.bookChanged, this);
            //this.on('reset', this.bookChanged, this);
            this.on('all', this.fireAll, this);
        },
        fireAll: function (eventName) {
            console.log('in Books model event is ' + eventName);
        },
        newBook: function (model) {
            console.log("new book");
            console.log(this.toJSON());
        },
        bookChanged: function () {
            console.log("changed book");
            console.log(this.toJSON());
        }

    });

    return Books;
});
