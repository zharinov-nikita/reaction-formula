import { validatorIsMaxLength } from './is-max-length.validator'

describe('validatorIsMaxLength', () => {
  test('expected true (with spaces)', () => {
    expect(validatorIsMaxLength({ value: 'hi ', maxLength: 2 })).toBe(true)
  })

  test('expected false (with spaces)', () => {
    expect(validatorIsMaxLength({ value: 'hi ', maxLength: 4 })).toBe(false)
  })

  test('expected true (clear of spaces)', () => {
    expect(validatorIsMaxLength({ value: 'hi ', maxLength: 1, clearOfSpaces: true })).toBe(true)
  })

  test('expected false (clear of spaces)', () => {
    expect(validatorIsMaxLength({ value: 'hi ', maxLength: 3, clearOfSpaces: true })).toBe(false)
  })

  test('snapshot', () => {
    expect(validatorIsMaxLength({ value: 'hi ', maxLength: 2 })).toMatchSnapshot()
    expect(validatorIsMaxLength({ value: 'hi ', maxLength: 4 })).toMatchSnapshot()
    expect(validatorIsMaxLength({ value: 'hi ', maxLength: 1, clearOfSpaces: true })).toMatchSnapshot()
    expect(validatorIsMaxLength({ value: 'hi ', maxLength: 3, clearOfSpaces: true })).toMatchSnapshot()
  })
})
