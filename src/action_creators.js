
export function newSuite() {
  return {
    type: 'NEW_SUITE'
  };
}

export function loadSuite(id) {
  return {
    type: 'LOAD_SUITE',
    id: id
  };
}

export function onSuiteNameChange(name) {
  return {
    type: 'UPDATE_SUITE_NAME',
    name: name
  };
}
export function onContainerNameChange(name) {
  return {
    type: 'UPDATE_CONTAINER_NAME',
    name: name
  };
}

export function loadContainer(id) {
  return {
    type: 'LOAD_CONTAINER',
    id: id
  };
}

export function newLink() {
  return {
    type: 'NEW_LINK'
  };
}
