import AppDispatcher from './app-dispatcher'

export default {

  startSuite: function(suite) {
    var action = {
      actionType: 'START_SUITE',
      suite: suite
    };

    AppDispatcher.dispatch(action);
  }
};


