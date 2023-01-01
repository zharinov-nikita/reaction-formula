import { EventHandlerType, EventType, SetDataType, ValidatorType } from '../../types'

export interface Validate<T> {
  data: T
  setData: SetDataType<T>
  event: EventType
  eventHandler: EventHandlerType
  validator: ValidatorType
}

export interface ReactionFormulaProps<T> {
  data: T
  component: (props: Validate<T>) => JSX.Element
}
