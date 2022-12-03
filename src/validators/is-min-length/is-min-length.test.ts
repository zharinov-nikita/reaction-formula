import { validatorIsMinLength } from './is-min-length.validator'

describe('validatorIsMinLength', () => {
  test('expected true (with spaces)', () => {
    expect(validatorIsMinLength({ value: 'hi ', minLength: 4 })).toBe(true)
  })

  test('expected false (with spaces)', () => {
    expect(validatorIsMinLength({ value: 'hi ', minLength: 2 })).toBe(false)
  })

  test('expected true (clear of spaces)', () => {
    expect(validatorIsMinLength({ value: 'hi ', minLength: 3, clearOfSpaces: true })).toBe(true)
  })

  test('expected false (clear of spaces)', () => {
    expect(validatorIsMinLength({ value: 'hi ', minLength: 1, clearOfSpaces: true })).toBe(false)
  })

  test('snapshot', () => {
    expect(expect(validatorIsMinLength({ value: 'hi ', minLength: 4 }))).toMatchSnapshot()
    expect(expect(validatorIsMinLength({ value: 'hi ', minLength: 2 }))).toMatchSnapshot()
    expect(expect(validatorIsMinLength({ value: 'hi ', minLength: 3, clearOfSpaces: true }))).toMatchSnapshot()
    expect(expect(validatorIsMinLength({ value: 'hi ', minLength: 1, clearOfSpaces: true }))).toMatchSnapshot()
  })
})