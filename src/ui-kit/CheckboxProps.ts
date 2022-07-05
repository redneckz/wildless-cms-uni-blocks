export interface CheckboxProps {
  text?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  className?: string;
}
