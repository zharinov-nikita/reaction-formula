import { TypeEvent, TypeEventHandler, TypeSetData, TypeValidator } from '../../types'

interface Validate<T> {
  data: T
  setData: TypeSetData<T>
  event: TypeEvent
  eventHandler: TypeEventHandler
  validator: TypeValidator
}

export interface ReactionFormulaProps<T> {
  data: T
  component: (props: Validate<T>) => JSX.Element
}
