describe('Example', () => {
 
  it('Should do something', () => {
    console.log('first test')
  })
 
  it('Should do something else', () => {
    console.log('second test')
  })

  it.only('Should do that', () => {
    console.log('third test')
  })
})