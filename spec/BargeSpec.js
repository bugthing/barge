'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import Root from '../app/components/Root.js'

describe('Root component', () => {
  let rootDOMNode

  beforeEach(() => {
    let component = TestUtils.renderIntoDocument(<Root />)
    rootDOMNode = ReactDOM.findDOMNode(component)
  })

  it('has a start button', () => {
    expect(rootDOMNode.textContent).toMatch(/Start Here/);
  })
})
