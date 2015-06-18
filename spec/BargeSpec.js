'use strict';

import React from 'react/addons';

import ServiceChooser from '../app/components/Aform.js'

var TestUtils = React.addons.TestUtils;

describe('Aform', () => {
  var component;

  beforeEach(() => {
    var sections = [{ name: 'Some Things', price: 300 }]
    component = TestUtils.renderIntoDocument(<ServiceChooser items={ sections } />);
  });

  it('should work', () => {
      console.log("SHITE:{component}");
    expect(component.getDOMNode().textContent).toMatch(/Some/);
  });
});
