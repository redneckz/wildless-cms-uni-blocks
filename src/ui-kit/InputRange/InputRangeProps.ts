export interface InputRangeProps {
  className?: string;
  items?: string[];
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  title?: string;
  onChange?: (value: number) => void;
}
