import { useState } from 'react'
import { UseReactionFormula, UseReactionFormulaProps } from './reaction-formula.types'
import { useEvent } from '../event'
import { validator } from '../../validators'

export function useReactionFormula<T>(props: UseReactionFormulaProps<T>): UseReactionFormula<T> {
  const [data, setData] = useState(props)
  const { event, eventHandler } = useEvent()
  return [data, setData, event, eventHandler, validator]
}
