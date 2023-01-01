import { ValidatorType } from '../types'
import { validatorIsEmail } from './is-email'
import { validatorIsEmpty } from './is-empty'
import { validatorIsMaxLength } from './is-max-length'
import { validatorIsMinLength } from './is-min-length'

export type { ValidatorIsEmail, ValidatorIsEmailProps } from './is-email'
export type { ValidatorIsEmpty, ValidatorIsEmptyProps } from './is-empty'
export type { ValidatorIsMaxLength, ValidatorIsMaxLengthProps } from './is-max-length'
export type { ValidatorIsMinLength, ValidatorIsMinLengthProps } from './is-min-length'

export const validator: ValidatorType = {
  isEmail: validatorIsEmail,
  isEmpty: validatorIsEmpty,
  isMaxLength: validatorIsMaxLength,
  isMinLength: validatorIsMinLength,
}
