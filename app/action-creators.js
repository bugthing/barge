var AppDispatcher = require('./app-dispatcher');

module.exports = {

  moveForm: function(form) {
    var action = {
      actionType: 'MOVE_FORM',
      form: form
    };

    AppDispatcher.dispatch(action);
  }
};


