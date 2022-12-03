import { validatorIsEmail } from './is-email.validator'

describe('validatorIsEmail', () => {
  test('expected true', () => {
    expect(validatorIsEmail('user@gmail.com')).toBe(true)
  })

  test('expected false', () => {
    expect(validatorIsEmail('user@gmail')).toBe(false)
  })

  test('snapshot', () => {
    expect(validatorIsEmail('user@gmail.com')).toMatchSnapshot()
    expect(validatorIsEmail('user@gmail')).toMatchSnapshot()
  })
})
