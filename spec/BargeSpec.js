'use strict';

import React from 'react/addons';

import Root from '../app/components/Root.js'

let TestUtils = React.addons.TestUtils;

describe('Root component', () => {
  let rootDOMNode

  beforeEach(() => {
    let component = TestUtils.renderIntoDocument(<Root />)
    rootDOMNode = React.findDOMNode(component)
  })

  it('has a start button', () => {
    expect(rootDOMNode.textContent).toMatch(/Start Here/);
  })
})
