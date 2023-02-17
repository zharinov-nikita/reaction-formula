import { useEvent } from './event.hook'

describe('useEvent', () => {
  test('snapshot', () => {
    expect(useEvent).toMatchSnapshot('snapshot')
  })
})
