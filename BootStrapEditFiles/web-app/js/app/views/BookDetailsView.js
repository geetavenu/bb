/**
 * Created with IntelliJ IDEA.
 * User: vbangalo
 * Date: 2/13/14
 * Time: 2:20 PM
 * To change this template use File | Settings | File Templates.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/bookDetails.html' ,
    'text!tpl/bookDetailsEdit.html'
], function($, _, Backbone, bookDetailsTemplate,bookDetailsEditTemplate){
var BookDetailsView = Backbone.View.extend({
    stat:true,
    template:_.template( bookDetailsTemplate),
    initialize:function () {
        _.bindAll(this, 'render', 'close');
        this.model.bind('change', this.render, this);
        //this.model.bind('add',this.render,this)
    },
    events: {
        "click #edit"              : "edit"  ,
        "click #save"              : "save"
    },
    edit: function(){
      console.log("clicked edit in book details view");
        this.render("edit");
    }  ,
    save: function(){
        console.log("clicked save in book details view");
        var author= $("#myname").val();
        console.log("author is "+author);
        this.model.set({author:author});
        this.model.save() ;


        console.log("after save "+this.model.get("author")) ;
    }  ,
    close:function () {
        $(this.el).unbind();
        $(this.el).remove();
    },

    render:function (eventName) {
        console.log("in book details view eventName is "+eventName);
        if (eventName === "edit"){

            console.log ("yes it is edit");
            // do not use this
           // $(this.el).unbind();
            //$(this.el).empty();
            if (this.stat){
            $(this.el).html(_.template( bookDetailsEditTemplate)(this.model.toJSON()));
                this.stat=false;
            }
            else
            {   this.stat=true;
                $(this.el).html(this.template(this.model.toJSON()));}
        } else{
            this.stat=true;
            console.log("no it is not");
            $(this.el).html(this.template(this.model.toJSON()));
        }
        console.log("in render model is " + this.model.toJSON());
        //$(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});

    return BookDetailsView;
});

