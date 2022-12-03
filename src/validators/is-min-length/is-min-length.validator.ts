import { ValidatorIsMinLength, ValidatorIsMinLengthProps } from './is-min-length.types'

export function validatorIsMinLength(props: ValidatorIsMinLengthProps): ValidatorIsMinLength {
  if (!props.clearOfSpaces) return props.value.length < props.minLength
  return props.value.replace(/\s/g, "").length < props.minLength
}
