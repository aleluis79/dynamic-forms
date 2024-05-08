export interface IFormStructure {
  type: string;
  label: string;
  name: string;
  value: string | number | boolean;
  options?: IOption[];
  optionsFn?: string;
  validations?: {
    validator: string;
    value?: string | number | boolean;
    message: string;
  }[];
}

export interface IOption {
  label: string;
  value: number | string | boolean;
}
