import { ValidatorIsEmpty, ValidatorIsEmptyProps } from './is-empty.types'

export function validatorIsEmpty(value: ValidatorIsEmptyProps): ValidatorIsEmpty {
  return value.length === 0
}
