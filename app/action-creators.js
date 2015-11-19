import AppDispatcher from './app-dispatcher'

export default {
    startSuite: function() {
        AppDispatcher.dispatch({ actionType: 'START_SUITE' });
    },

    loadSuite: function(uuid) {
        var action = {
            actionType: 'LOAD_SUITE',
            uuid: uuid
        };

        AppDispatcher.dispatch(action)
    },

    saveSuite: function(suite) {
        var action = {
            actionType: 'SAVE_SUITE',
            suite: suite
        };

        AppDispatcher.dispatch(action)
    },

    addLink: function() {
        var action = {
            actionType: 'ADD_LINK'
        };

        AppDispatcher.dispatch(action)
    }
}
