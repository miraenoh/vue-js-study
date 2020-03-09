import Counter from '@/Counter'
import { shallowMount } from '@vue/test-utils'

describe('Counter', () => {
  let component
  beforeAll(() => {
    component = shallowMount(Counter)
  })

  it('Should render a button containing Increase', () => {
    expect(component.html()).toContain('<button>Increase</button>')
  })

  it('Should render the correct text', () => {
    let counterValue = component.find('p')
    expect(counterValue.text()).toBe('You clicked 0 times')
  })

  it('Should have a counter of zero by default', () => {
    expect(component.vm.clicks).toBe(0)
  })

  it('Should increase the counter by clicking the button', () => {
    let button = component.find('button')
    button.trigger('click')
    expect(component.vm.clicks).toBe(1)
  })
})
