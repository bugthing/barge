'use strict';

import React from 'react/addons';

import Root from '../app/components/Root.js'

var TestUtils = React.addons.TestUtils;

describe('Aform', () => {
  var component;

  beforeEach(() => {
    var sections = [{ name: 'Some Things', price: 300 }]
    component = TestUtils.renderIntoDocument(<Root />);
  });

  it('should work as expected', () => {
    //expect(component.getDOMNode().textContent).toMatch(/Some/);
    expect(component).toBeTruthy()
  });
});
