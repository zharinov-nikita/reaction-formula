import { ValidatorIsMaxLength, ValidatorIsMaxLengthProps } from './is-max-length.types'

export function validatorIsMaxLength(props: ValidatorIsMaxLengthProps): ValidatorIsMaxLength {
  if (!props.clearOfSpaces) return props.value.length > props.maxLength
  return props.value.replace(/\s/g, "").length > props.maxLength
}
