/**
 * Created by vbangalo on 4/18/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/PersonDetailsFormT.html',
    'app/collections/Person'
], function ($, _, Backbone, personDetailsFormT,Person) {
    var PersonDetailsFormV = Backbone.View.extend({
        initialize:function(){console.log("in initialize");},
        events: {
            'click #submit': 'saveHandler'
        },
        saveHandler: function(e){console.log('in save');
            console.log(' first name is '+$('#FirstName').val())  ;
            var person = new Person({firstName:$('#FirstName').val(), lastName:$('#LastName').val(),age:0});

            var self = this;
            person.save([],{success:function(){
                console.log("sucess!");

                self.collection.add(person);
            }});

           // this.collection.add(person);
        },
        template: _.template(personDetailsFormT),
        render: function(){
            console.log(personDetailsFormT);
         this.$el.html(this.template());
    }
    });

    return PersonDetailsFormV;
});


