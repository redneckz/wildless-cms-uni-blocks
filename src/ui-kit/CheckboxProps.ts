export interface CheckboxProps {
  text?: string;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  className?: string;
}
