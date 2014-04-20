define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/bookLink.html'
], function($, _, Backbone, bookLinkTemplate){
var BookListView = Backbone.View.extend({
    tagName:'ul',
    className:'nav nav-sidebar',
    initialize:function () {
        console.log("in bookListView ");
        _.bindAll(this, 'render', 'sayHello');
       // this.model.bind('change', this.render, this);
       // this.model.bind('add', this.render, this);
        this.model.bind('reset', this.render, this);

    },
    template:_.template(bookLinkTemplate),
   // template:_.template($("#bookLink").html()),
    sayHello:function () {
        console.log("hello");
    },
    render:function (eventName) {
        console.log("in bookListView render");
        console.log("template is "+bookLinkTemplate);
       // $(this.el).html('hi'+this.template({'id':'1','title':'bla'}));
       // $(this.el).empty();
        _(this.model.models).each(function (book) {
            console.log("book is "+this.template(book.toJSON()))   ;
            $(this.el).append(this.template(book.toJSON()));
        }, this);
        return this;
    }
});

    return BookListView;
});
