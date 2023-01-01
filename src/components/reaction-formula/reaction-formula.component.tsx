import { useState } from 'react'
import { useEvent } from '../../hooks'
import { validator } from '../../validators'
import { ReactionFormulaProps } from './reaction-formula.types'

export function ReactionFormula<T>(props: ReactionFormulaProps<T>) {
  const [data, setData] = useState<T>(props.data)
  const { event, eventHandler } = useEvent()

  return props.component({
    data,
    setData,
    event,
    eventHandler,
    validator,
  })
}
