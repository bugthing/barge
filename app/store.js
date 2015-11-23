import LocalStorage from 'localStorage'
import uuid from 'node-uuid'

let AppDispatcher = require('./app-dispatcher');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');
let suites = JSON.parse(LocalStorage.getItem('suites')) || [];

let currentSuiteUuid = undefined;
let currentContainerUuid = undefined;

let Store = assign({}, EventEmitter.prototype, {

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
      let matchedSuite = undefined
      suites.forEach( (s) => {
            if(currentSuiteUuid == s.uuid) matchedSuite = s
      })
      return matchedSuite
  },

  getContainer: function() {
      let matchedContainer = undefined
      this.getSuite().containers.forEach( (c) => {
            if(currentContainerUuid == c.uuid) matchedContainer = c
      })
      return matchedContainer
  },

  getSuites: function() {
    return suites
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'START_SUITE':
        currentSuiteUuid = uuid.v4()
        currentContainerUuid = uuid.v4()
        let newSuite = {
            uuid: currentSuiteUuid,
            name: undefined,
            containers: [
                {
                    uuid: currentContainerUuid
                }
            ]
        }
        suites.push(newSuite)
        Store.emitChange()
        break;

    case 'LOAD_SUITE':
        currentSuiteUuid = action.uuid
        Store.emitChange()
        break;

    case 'SAVE_SUITE':
        currentSuiteUuid = undefined
        LocalStorage.setItem('suites', JSON.stringify(suites))
        Store.emitChange();
        break;

    case 'FOCUS_NODE':
        currentContainerUuid = action.uuid
        Store.emitChange()
        break;

    case 'ADD_LINK':
        let newUuid = uuid.v4()

        Store.getSuite().containers.push({ uuid: newUuid })

        let container = Store.getContainer()
        if(container.links == undefined) container.links = []
        container.links.push({ uuid: newUuid })

        Store.emitChange();
        break;

    default:
  }
});

module.exports = Store;
