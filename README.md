#Install

Install the package via [npm](https://www.npmjs.com/package/reaction-formula) or use the command `npm i reaction-formula`

#Usage

```tsx
import { FC } from "react";
import { useReactionFormula } from "reaction-formula";

interface Form {
  name: string;
  email: string;
}

const App: FC = () => {
  const [form, setForm, helperForm] = useReactionFormula<Form>({
    name: "",
    email: "",
  });
  return (
    <div className="reaction-formula">
      {helperForm.isEvent.focus && helperForm.isError.minLength(form.name, 4) && "error - (min length 4)"}
      {helperForm.isEvent.focus && helperForm.isError.maxLength(form.name, 8) && "error - (max length 8)"}
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        onBlur={helperForm.eventHandler.onBlur}
        onFocus={helperForm.eventHandler.onFocus}
      />
      {helperForm.isEvent.focus && helperForm.isError.email(form.email) && "invalid email"}
      <input
        type="text"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        onBlur={helperForm.eventHandler.onBlur}
        onFocus={helperForm.eventHandler.onFocus}
      />
    </div>
  );
};

export default App;
```