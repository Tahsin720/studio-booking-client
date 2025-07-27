export type Any = any;

export type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

export interface DropdownOption {
  label: string;
  value: string | number | boolean;
}
