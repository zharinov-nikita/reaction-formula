#Install

Install the package via [npm](https://www.npmjs.com/package/reaction-formula) or use the command `npm i reaction-formula`

#Usage

```tsx
import { FC } from "react";
import { useReactionFormula } from "reaction-formula";

interface Form {
  name: string;
}

export const App: FC = () => {
  const [form, setForm, helperForm] = useReactionFormula<Form>({
    name: "",
  });
  return (
    <>
      {helperForm.isEvent.focus && helperForm.isError.minLength(form.name, 8) && "error"}
      <input
        type="text"
        value={form.name}
        onBlur={helperForm.eventHandler.onBlur}
        onFocus={helperForm.eventHandler.onFocus}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
    </>
  );
};
```