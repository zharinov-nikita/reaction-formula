import { Fragment } from 'react'
import { useReactionFormula } from 'reaction-formula'

export const Form2 = () => {
  const [form2, setForm2, eventForm2, eventHandlerForm2, validatorForm2] = useReactionFormula({ name: '' })
  return (
    <Fragment>
      <ul>
        <li>{eventForm2.isFocus && validatorForm2.isEmpty(form2.name) && 'Является пустотой'}</li>
        <li>{eventForm2.isFocus && validatorForm2.isEmail(form2.name) && 'Является email'}</li>
        <li>
          {eventForm2.isFocus &&
            validatorForm2.isMaxLength({ value: form2.name, maxLength: 8 }) &&
            'Больше 8 символов'}
        </li>
        <li>
          {eventForm2.isFocus &&
            validatorForm2.isMinLength({ value: form2.name, minLength: 8 }) &&
            'Меньше 8 символов'}
        </li>
      </ul>
      <input
        value={form2.name}
        onChange={(e) => setForm2({ ...form2, name: e.target.value })}
        onFocus={eventHandlerForm2.onFocus}
        onBlur={eventHandlerForm2.onBlur}
      />
    </Fragment>
  )
}
