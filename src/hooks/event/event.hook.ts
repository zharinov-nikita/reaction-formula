import { useState } from 'react'
import { TypeEvent, TypeEventHandler } from '../../types'
import { UseEvent } from './event.types'

export function useEvent(): UseEvent {
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [isBlur, setIsBlur] = useState<boolean>(false)

  function onFocus() {
    setIsFocus(true)
    setIsBlur(false)
  }

  function onBlur() {
    setIsBlur(true)
    setIsFocus(false)
  }

  const eventHandler: TypeEventHandler = {
    onFocus,
    onBlur,
  }

  const event: TypeEvent = {
    isBlur,
    isFocus,
  }

  return { eventHandler, event }
}
