import { Accessor, createContext, useContext } from "solid-js";
import { ValidationState } from "@kobalte/utils";

export interface SwitchDataSet {
  "data-valid": string | undefined;
  "data-invalid": string | undefined;
  "data-checked": string | undefined;
  "data-required": string | undefined;
  "data-disabled": string | undefined;
  "data-readonly": string | undefined;
  "data-hover": string | undefined;
  "data-focus": string | undefined;
  "data-focus-visible": string | undefined;
}

export interface SwitchContextValue {
  name: Accessor<string | undefined>;
  value: Accessor<string>;
  dataset: Accessor<SwitchDataSet>;
  validationState: Accessor<ValidationState | undefined>;
  isChecked: Accessor<boolean>;
  isRequired: Accessor<boolean | undefined>;
  isDisabled: Accessor<boolean | undefined>;
  isReadOnly: Accessor<boolean | undefined>;
  setIsChecked: (isChecked: boolean) => void;
  setIsFocused: (isFocused: boolean) => void;
  setIsFocusVisible: (isFocusVisible: boolean) => void;
}

export const SwitchContext = createContext<SwitchContextValue>();

export function useSwitchContext() {
  const context = useContext(SwitchContext);

  if (context === undefined) {
    throw new Error("[kobalte]: `useSwitchContext` must be used within a `Switch` component");
  }

  return context;
}
