define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        HomeV = require('app/views/HomeV'),
        Persons = require('app/collections/Persons'),
        PersonLinksV = require('app/views/PersonLinksV'),
        PersonDetailsV = require('app/views/PersonDetailsV'),
        PersonDetailsFormV = require('app/views/PersonDetailsFormV'),
        homeV = new HomeV();

    var persons = new Persons();
    homeV.render({persV:PersonDetailsV,collection:persons});
    var personLinksV =  new PersonLinksV({model: persons});
    persons.fetch({reset:true,success:function(){
        console.log("sucess!");
        personLinksV.render();
    }});
    console.log('el after rnder is '+personLinksV.el);

    $("#sidebar").html(personLinksV.el);

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "persons/:id": "detail" ,
            "npersons": "new"
        },

        home: function () {
            // homeView.delegateEvents(); // delegate events when the view is recycled
            // homeView.render();
            //shellView.selectMenuItem('home-menu');
            persons.fetch({reset:true,success:function(){
                console.log("sucess!");
                personLinksV.render();
            }});
        },
        detail: function (id) {
            var person = persons.get(id);
            var personDetailsV = new PersonDetailsV({model: person, collection: persons});
            $("#main").html(personDetailsV.el);

        },
        new:function(){

            var personDetailsFormV = new PersonDetailsFormV({collection: persons});
            personDetailsFormV.render();
            $("#main").html(personDetailsFormV.el);

        }


    });

});