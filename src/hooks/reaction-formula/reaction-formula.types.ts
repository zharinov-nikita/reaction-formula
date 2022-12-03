import type { Dispatch, SetStateAction } from "react";

type Data<T> = T;
type SetData<T> = Dispatch<SetStateAction<T>>;
interface Helper {
  isEvent: {
    focus: boolean;
    blur: boolean;
  };
  eventHandler: {
    onFocus: () => void;
    onBlur: () => void;
  };
  isError: {
    minLength: (value: string, minLength: number) => boolean;
    maxLength: (value: string, maxLength: number) => boolean;
    emptyLength: (value: string) => boolean;
    definedLength: (value: string, definedLength: number) => boolean;
    email: (value: string) => boolean;
    completeMatch: (comparedValue: string, value: string) => boolean;
    regexp: (value: string, regexp: RegExp) => boolean;
  };
}

export type UseReactionFormula<T> = [Data<T>, SetData<T>, Helper];
export type UseReactionFormulaProps<T> = T;
