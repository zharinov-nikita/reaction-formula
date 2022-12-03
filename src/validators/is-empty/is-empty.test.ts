import { validatorIsEmpty } from './is-empty.validator'

describe('validatorIsEmpty', () => {
  test('expected true', () => {
    expect(validatorIsEmpty('')).toBe(true)
  })

  test('expected false', () => {
    expect(validatorIsEmpty('not empty')).toBe(false)
  })

  test('snapshot', () => {
    expect(validatorIsEmpty('')).toMatchSnapshot()
    expect(validatorIsEmpty('not empty')).toMatchSnapshot()
  })
})
