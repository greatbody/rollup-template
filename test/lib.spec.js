import dis from '../src/lib'

describe('test demo', () => {
  it('demo should console log output', () => {
    console.log = jest.fn()
    dis('hellos')
    expect(console.log).toHaveBeenCalledWith('hellos')
  })
})
