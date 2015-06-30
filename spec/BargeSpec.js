'use strict';

import React from 'react/addons';

import Root from '../app/components/Root.js'

let TestUtils = React.addons.TestUtils;

describe('Start Page', () => {
  let rootDOMNode

  beforeEach(() => {
    let component = TestUtils.renderIntoDocument(<Root />)
    rootDOMNode = React.findDOMNode(component)
  })

  it('has a start button', () => {
    expect(rootDOMNode.textContent).toMatch(/Start Here/);
  })

  it('starts when you click the button', () => {
    TestUtils.Simulate.click(rootDOMNode)
    console.log(rootDOMNode.textContent)
    expect(rootDOMNode.textContent).toMatch(/Form/);
  })

})
