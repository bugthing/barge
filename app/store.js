var AppDispatcher = require('./app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var forms = [];

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

  getAll: function() {
    return forms;
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'MOVE_FORM':
      forms.push(action.form);
      Store.emitChange();
      break;

    default:
  }
});

module.exports = Store;

