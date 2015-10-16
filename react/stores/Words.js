var Dispatcher = require('flux').Dispatcher;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var WordsStore = assign({}, EventEmitter.prototype, {



});

WordsStore.dispatchToken = Dispatcher.register(function(action) {

    switch(action.type) {

        case "ADD":
            console.log("Event caught!");


    }

});
