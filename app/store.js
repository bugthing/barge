import LocalStorage from 'localStorage'
import uuid from 'node-uuid'

let AppDispatcher = require('./app-dispatcher');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');

import Suites from './suites'
let suites = new Suites()

let currentSuiteUuid = undefined;
let focusContainer = undefined;

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
      return suites.findSuite(currentSuiteUuid)
  },

  getContainer: function() {
      let cont = this.getSuite().containers[0]
      this.getSuite().containers.some( function(c) {
          if(c.id === focusContainer) cont = c
      });
      return cont
  },

  getSuites: function() {
    return suites.all
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'START_SUITE':
        let newSuite = suites.newSuite()
        currentSuiteUuid = newSuite.id
        Store.emitChange()
        break;

    case 'LOAD_SUITE':
        let curSuite = suites.findSuite(action.uuid)
        currentSuiteUuid = curSuite.id
        Store.emitChange()
        break;

    case 'NAME_SUITE':
        Store.getSuite().name = action.name;
        Store.emitChange();
        break;

    case 'SAVE_SUITE':
        currentSuiteUuid = undefined
        suites.save()
        Store.emitChange();
        break;

    case 'FOCUS_NODE':
        let focusContainer = action.id;
        Store.emitChange()
        break;

    case 'ADD_LINK':
        let newContainer = Store.getSuite().newContainer()

        let container = Store.getContainer()
        container.links.push({ id: newContainer.id })

        Store.emitChange();
        break;

    default:
  }
});

module.exports = Store;
