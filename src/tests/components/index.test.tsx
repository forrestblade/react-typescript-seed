/* eslint-env jest */
import { expect } from 'code'
import { mount } from 'enzyme'
import * as sinon from 'sinon'
import * as React from 'react'
import { App } from '../../components/index'

describe('Given `App`', () => {
  let component: any,  sandbox:any, setCountMock: any

  function requiredProps (overrides = {}) {
    return {
      ...overrides
    }
  }

  function renderComponent (props = requiredProps()) {
    return mount(<App {...props} />)
  }

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    component = renderComponent()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should contain a `section` with a specifying className', () => {
    expect(component.find('section.App').exists()).to.be.true()
  })

  describe('Given a `section.counter`', () => {
    it('should contain a `section` with a specifying className', () => {
      expect(component.find('section.counter').exists()).to.be.true()
    })
    
    it('should contain a `div` with a specifying className', () => {
      expect(component.find('div.count').exists()).to.be.true()
    })

    it('should contain two buttons', () => {
      expect(component.find('.counter').find('button')).to.have.length(2)
      expect(component.find('button.decrement').exists()).to.be.true()
      expect(component.find('button.increment').exists()).to.be.true()
    })

    it('should increment the count when the appropriate button is pressed', () => {
      component.find('button.increment').first().simulate('click')
      expect(component.find('div.count').text()).to.equal('1')
    })

    it('should decrement the count when the appropriate button is pressed', () => {
      component.find('button.decrement').first().simulate('click')
      expect(component.find('div.count').text()).to.equal('-1')
    })
  })
})
