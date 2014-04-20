/**
 * Created by vbangalo on 3/16/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/PersonLinkT.html'
], function($, _, Backbone, PersonLinkT){
var PersonLinksV = Backbone.View.extend({
    tagName:'ul',
    className:'nav nav-sidebar',
    initialize:function () {
        console.log("in person link view");
        var that=this;
        this.model.bind('all', this.test, this);
        this.model.bind('request',this.render,this);
        this.model.bind('remove',this.render,this);
        this.model.bind('add',this.render,this);

   },
    test:function(e){console.log("in test "+e)},
    template:_.template(PersonLinkT),
    render:function (eventName) {
        var that=this;

        console.log('in personLinsV' ) ;
        console.log(this);
       // JSON.stringify(  this);
        console.log('bla '+JSON.stringify(this.model.models));
        $(this.el).empty();
        _(that.model.models).each(function (person) {
            console.log('in personLinksV person is '+person.toJSON()) ;
            $(that.el).append(that.template(person.toJSON()));
        }, that);

        return that;
    }
});

    return PersonLinksV;
});


