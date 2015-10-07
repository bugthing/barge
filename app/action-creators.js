import AppDispatcher from './app-dispatcher'

export default {
    startSuite: function(suite) {
        var action = {
            actionType: 'START_SUITE',
            suite: suite
        };

        AppDispatcher.dispatch(action)
    },

    loadSuite: function(index) {
        var action = {
            actionType: 'LOAD_SUITE',
            index: index
        };

        AppDispatcher.dispatch(action)
    },

    saveContainer: function(container) {
        var action = {
            actionType: 'SAVE_CONTAINER',
            container: container
        };

        AppDispatcher.dispatch(action)
    },

    moveForm: function(form) {
        var action = {
            actionType: 'MOVE_FORM',
            form: form
        };

        AppDispatcher.dispatch(action)
    }
}
