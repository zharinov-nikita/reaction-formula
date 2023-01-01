import {
  ValidatorIsEmail,
  ValidatorIsEmailProps,
  ValidatorIsEmpty,
  ValidatorIsEmptyProps,
  ValidatorIsMaxLength,
  ValidatorIsMaxLengthProps,
  ValidatorIsMinLength,
  ValidatorIsMinLengthProps,
} from '../validators'

export interface ValidatorType {
  isEmail: (props: ValidatorIsEmailProps) => ValidatorIsEmail
  isEmpty: (props: ValidatorIsEmptyProps) => ValidatorIsEmpty
  isMaxLength: (props: ValidatorIsMaxLengthProps) => ValidatorIsMaxLength
  isMinLength: (props: ValidatorIsMinLengthProps) => ValidatorIsMinLength
}
