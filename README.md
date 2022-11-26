#Install

Install the package via [npm](https://www.npmjs.com/package/reaction-formula) or use the command `npm i reaction-formula`

#Usage

```tsx
import { FC } from "react";
import { useReactionFormula } from "reaction-formula";

interface Form {
  language: string;
  framework: string;
}

export const Component: FC = () => {
  const { data, setData, isEvent, isError, eventHandler } =
    useReactionFormula<Form>({ language: "typescript", framework: "angular" });
  return (
    <>
      {isEvent.focus && isError.emptyLength(data.language) && "error"}
      <input
        type="text"
        value={data.language}
        onChange={(e) => setData({ ...data, language: e.target.value })}
        onFocus={eventHandler.onFocus}
        onBlur={eventHandler.onBlur}
      />
      {isEvent.focus && isError.emptyLength(data.framework) && "error"}
      <select
        value={data.framework}
        onChange={(e) => setData({ ...data, framework: e.target.value })}
      >
        <option value="react">react</option>
        <option value="angular">angular</option>
        <option value="vue">vue</option>
      </select>
      <button onClick={() => console.log(data)}>View data</button>
    </>
  );
};
```