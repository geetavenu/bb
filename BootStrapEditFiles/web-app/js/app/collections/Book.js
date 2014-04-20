/**
 * Created with IntelliJ IDEA.
 * User: vbangalo
 * Date: 2/13/14
 * Time: 9:26 AM
 * To change this template use File | Settings | File Templates.
 */
define([
    'jquery',
    'underscore',
    'backbone'
],function($, _,
           Backbone) {

var Book = Backbone.Model.extend({
    defaults:{
        // "id":"1",
        // "author": 'Fetus'
    },
    initialize:function () {
        console.log("in Book model");
       // this.on("change", function (model) {
            //var name = model.get("author"); // 'Stewie Griffin'
            //alert("Changed " );
        //    console.log(this.toJSON());
        //}, this);
    },
    urlRoot:"books/"
});
   return Book;
});

