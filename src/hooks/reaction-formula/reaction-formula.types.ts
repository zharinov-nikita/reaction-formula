import { TypeData, TypeEventHandler, TypeEvent, TypeSetData, TypeValidator } from '../../types'

export type UseReactionFormula<T> = [TypeData<T>, TypeSetData<T>, TypeEvent, TypeEventHandler, TypeValidator]
export type UseReactionFormulaProps<T> = T
