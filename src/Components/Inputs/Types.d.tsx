export interface InputProps {
  placeholder: string;
  utils: InputUtils;
}

interface InputUtils {
  value: string | number;
  onChange: () => void;
}
