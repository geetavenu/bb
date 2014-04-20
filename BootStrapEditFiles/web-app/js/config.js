/**
 * Created with IntelliJ IDEA.
 * User: vbangalo
 * Date: 2/5/14
 * Time: 9:41 PM
 * To change this template use File | Settings | File Templates.
 */

require.config({
    paths: {
        // Major libraries
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
        backbone: 'libs/backbone/backbone-min', // https://github.com/amdjs
        sinon: 'libs/sinon/sinon.js',

        // Require.js plugins
        text: 'libs/require/text',
        order: 'libs/require/order',

        // Just a short cut so we can put our html outside the js dir
        // When you have HTML/CSS designers this aids in keeping them out of the js directory
        templates: '../templates'
    },
    urlArgs: "bust=" +  (new Date()).getTime()

});


/*require.config({
    paths: {
        jquery: "http://code.jquery.com/jquery-1.10.1.min", // currently 1.8.3
        underscore: "http://underscorejs.org/underscore-min",  // currently 1.4.3
        // Require.js plugins
        text: 'libs/require/text',
        order: 'libs/require/order',
        templates: '../templates',
        backbone: "http://backbonejs.org/backbone-min" // currently 0.9.9
    },
    shim: {
        underscore: { exports: "_" },
        backbone: { deps: ["underscore", "jquery"], exports: "Backbone" },
        stickit: { deps: ["backbone"] }
    }
}); */
