
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
