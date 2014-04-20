define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        HomeView = require('app/views/home'),
        BooksModel = require('app/collections/Books'),
        BooksListView = require('app/views/BookListView'),
        BookDetailsView = require('app/views/BookDetailsView'),
        homeView = new HomeView();
    homeView.render();
    var books = new BooksModel();

    var bookListV = new BooksListView({model: books});
    books.fetch({reset: true});
    //bookListV.render();


    $("#sidebar").html(bookListV.el);

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "books/:id":"detail"
        },

        home: function () {
            // homeView.delegateEvents(); // delegate events when the view is recycled
           // homeView.render();
            //shellView.selectMenuItem('home-menu');
        },
        detail: function(id){
         var book = books.get(id);
          var  bookDetailsView = new BookDetailsView({model:book});
            bookDetailsView.render();
            $("#main").html(bookDetailsView.el);
       // $("#main").html("id is "+books.get(id).get("author"));
        }


    });

});