import { DataType, EventHandlerType, EventType, SetDataType, ValidatorType } from '../../types'

export type UseReactionFormula<T> = [DataType<T>, SetDataType<T>, EventType, EventHandlerType, ValidatorType]
export type UseReactionFormulaProps<T> = T
