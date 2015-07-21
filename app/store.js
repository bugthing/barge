var AppDispatcher = require('./app-dispatcher');

var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');

var suites = [];

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
    return suites[0];
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'START_SUITE':
        suites.push(action.suite);
        Store.emitChange();
        break;

    case 'MOVE_FORM':
        console.log('Moved Form:' + Store.getSuite())

        // TODO - here I change the form - but need to figure out a better way
        Store.getSuite().form = [ { type: 'in2' } ]

        Store.emitChange();
        break;

    default:
  }
});

module.exports = Store;

