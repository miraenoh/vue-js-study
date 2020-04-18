import Stack from '@/stack'

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack(3)
  })

  afterEach(() => {
    stack.items = []
  })

  it('Should constructs the stack with a given capacity', () => {
    expect(stack.items).toEqual([])
    expect(stack.capacity).toBe(3)
  })

  it('Should have an isEmpty function that returns true if the stack is empty and false otherwise', () => {
    expect(stack.isEmpty()).toBe(true)
    stack.items.push(2)
    expect(stack.isEmpty()).toBe(false)
  })

  it('Should have an isFull function that returns true if the stack is full and false otherwise', () => {
    expect(stack.isFull()).toBe(false)
    stack.items.push(1)
    stack.items.push(2)
    stack.items.push(3)
    expect(stack.isFull()).toBe(true)
  })

  describe('Push', () => {
    it('Should add a new element on the top of the stack', () => {
      stack.push(2)
      expect(stack.items[stack.items.length - 1]).toBe(2)
    })

    it('Should return the new element pushed at the top of the stack', () => {
      let elementPushed = stack.push(2)
      expect(elementPushed).toBe(2)
    })

    it('Should return full if one tries to push at the top of the stack while it is full', () => {
      stack.items = [1, 2, 3]
      let element = stack.push(4)
      expect(stack.items[stack.items.length - 1]).toBe(3)
      expect(element).toBe('Full')
    })
  })

  describe('Pop', () => {
    it('Should remove the element at the top of the stack', () => {
      stack.items = [1, 2, 3]
      stack.pop()
      expect(stack.items).toEqual([1, 2])
    })

    it('Should return the value popped from the stack', () => {
      stack.items = [1, 2, 3]
      let element = stack.pop()
      expect(element).toBe(3)
    })

    it('Should return empty if one tries to pop from the empty stack', () => {
      expect(stack.pop()).toBe('Empty')
    })
  })

  describe('Peek', () => {
    it('Should return the element at the top of the stack', () => {
      stack.items = [1, 2, 3]
      let element = stack.peek()
      expect(element).toBe(3)
    })

    it('Should return empty if one tries to peek from the empty stack', () => {
      expect(stack.peek()).toBe('Empty')
    })
  })
})
