import { useState } from "react";
import {
  UseReactionFormula,
  UseReactionFormulaProps,
} from "./reaction-formula.types";

export function useReactionFormula<T>(
  props: UseReactionFormulaProps<T>
): UseReactionFormula<T> {
  const [data, setData] = useState(props);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isBlur, setIsBlur] = useState<boolean>(false);

  const isEvent = {
    blur: isBlur,
    focus: isFocus,
  };

  function onFocus() {
    setIsFocus(true);
    setIsBlur(false);
  }

  function onBlur() {
    setIsBlur(true);
    setIsFocus(false);
  }

  const eventHandler = {
    onFocus,
    onBlur,
  };

  function minLength(value: string, minLength: number): boolean {
    return value.length < minLength;
  }

  function maxLength(value: string, maxLength: number): boolean {
    return value.length > maxLength;
  }

  function emptyLength(value: string): boolean {
    return value.length === 0;
  }

  function definedLength(value: string, length: number): boolean {
    return value.length === length;
  }

  function email(value: string): boolean {
    return !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      value
    );
  }

  function completeMatch(comparedValue: string, value: string): boolean {
    return comparedValue !== value;
  }

  function regexp(value: string, regexp: RegExp): boolean {
    return new RegExp(regexp).test(value);
  }

  const isError = {
    minLength,
    maxLength,
    emptyLength,
    definedLength,
    email,
    completeMatch,
    regexp,
  };

  const validation = {
    isEvent,
    isError,
    eventHandler,
  };

  return [data, setData, validation];
}