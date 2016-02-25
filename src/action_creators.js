
export function newSuite() {
  return {
    type: 'NEW_SUITE'
  };
}

export function loadSuite(id) {
console.log('LOADDDDDDDDDDDDDDDDDDD:' + id);
  return {
    type: 'LOAD_SUITE',
    id: id
  };
}
