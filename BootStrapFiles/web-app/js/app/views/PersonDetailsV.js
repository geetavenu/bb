/**
 * Created by vbangalo on 3/16/14.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/PersonDetailsT.html'
], function ($, _, Backbone, personDetailsT) {
    var PersonDetailsV = Backbone.View.extend({
        template: _.template(personDetailsT),
        initialize:function(){
            this.model.bind('change', this.showbuttons, this);
            this.model.bind('remove', this.showbuttons, this);
            this.render();
        },
        showbuttons: function(){ $('button').show();},
        events: {
            'click #update': 'saveHandler' ,
            'click #delete': 'deleteHandler' ,
            'input [contenteditable=true]':'assignFields'
        },
        hideButton:function(e){ $('button').hide();},
        assignFields:function(e){
            var field = e.target.id;
            var value = e.target.innerText;
            console.log('field is ' + field);
            this.model.set(field, value);

         },
        deleteHandler:function (){


            this.model.destroy({wait:true});
            this.collection.remove(this.model);
            this.undelegateEvents();

            this.$el.removeData().unbind();

            //Remove view from DOM
            this.remove();

        }   ,
        hello: function () {
            console.log("hello");
        },
        saveHandler: function (e) {
            //Save logic
            this.model.save();
            console.log('changing filed');
            this.collection.add(this.model,{merge: true})  ;
            console.log('resetting persons')  ;
            e.preventDefault();
            $(e.target).fadeOut( "slow", function() {
                // Animation complete.
            });
        },
        render: function (eventName) {
            $(this.el).append(this.template(this.model.toJSON()));

            return this;
        }
    });

    return PersonDetailsV;
});


