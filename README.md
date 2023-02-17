# Install

Install the package via [npm](https://www.npmjs.com/package/reaction-formula) or use the command `npm i reaction-formula`

# Usage

```tsx
import { useReactionFormula, ReactionFormula } from 'reaction-formula'

//validation using a hook
export const ValidationUsingHook = () => {
  const [data, setData, event, eventHandler, validator] = useReactionFormula({
    email: '',
  })
  return (
    <div>
      {event.isFocus && !validator.isEmail(data.email) && 'error'}
      <input
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        onBlur={eventHandler.onBlur}
        onFocus={eventHandler.onFocus}
      />
    </div>
  )
}

//validation using a component
export const ValidationUsingComponent = () => {
  return (
    <div>
      <ReactionFormula
        data={{ email: '' }}
        component={({ data, setData, event, eventHandler, validator }) => {
          return (
            <>
              {event.isFocus && !validator.isEmail(data.email) && 'error'}
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                onBlur={eventHandler.onBlur}
                onFocus={eventHandler.onFocus}
              />
            </>
          )
        }}
      />
    </div>
  )
}

export const App = () => {
  return (
    <>
      <ValidationUsingHook />
      <br />
      <ValidationUsingHook />
    </>
  )
}

```

Check out the validator [library](https://www.npmjs.com/package/validator), as it is used for data validation.