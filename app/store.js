
import LocalStorage from 'localStorage'

var AppDispatcher = require('./app-dispatcher');

var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');

var suites = JSON.parse(LocalStorage.getItem('suites')) || [];
var current_suite = undefined;

var Store = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  getSuite: function() {
    if(current_suite !== undefined) return suites[current_suite]
  },

  getSuites: function() {
    return suites
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'START_SUITE':
        suites.push(action.suite);
        current_suite = suites.length - 1;
        Store.emitChange();
        break;

    case 'LOAD_SUITE':
        current_suite = action.index;
        Store.emitChange();
        break;

    case 'SAVE_CONTAINER':
        Store.getSuite().container = action.container
        current_suite = undefined;
        LocalStorage.setItem('suites', JSON.stringify(suites));
        Store.emitChange();
        break;

    case 'MOVE_FORM':
        // TODO - here I change the form - but need to figure out a better way
        Store.getSuite().form = [ { type: 'in2' } ]
        Store.emitChange();
        break;

    default:
  }
});

module.exports = Store;

