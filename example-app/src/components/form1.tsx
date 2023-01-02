import { Fragment } from 'react'
import { ReactionFormula } from 'reaction-formula'

export const Form1 = () => {
  return (
    <ReactionFormula
      data={{ name: '' }}
      component={({ data, setData, event, eventHandler, validator }) => (
        <Fragment>
          <ul>
            <li>{event.isFocus && validator.isEmpty(data.name) && 'Является пустотой'}</li>
            <li>{event.isFocus && validator.isEmail(data.name) && 'Является email'}</li>
            <li>
              {event.isFocus &&
                validator.isMaxLength({ value: data.name, maxLength: 8 }) &&
                'Больше 8 символов'}
            </li>
            <li>
              {event.isFocus &&
                validator.isMinLength({ value: data.name, minLength: 8 }) &&
                'Меньше 8 символов'}
            </li>
          </ul>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            onFocus={eventHandler.onFocus}
            onBlur={eventHandler.onBlur}
          />
        </Fragment>
      )}
    />
  )
}
