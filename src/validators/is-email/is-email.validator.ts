import { ValidatorIsEmail, ValidatorIsEmailProps } from './is-email.types'

export function validatorIsEmail(value: ValidatorIsEmailProps): ValidatorIsEmail {
  const regexp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  return regexp.test(value)
}
