import React, { SyntheticEvent } from 'react';
import FormControl from '../FormControl';
import Input from '../Input';
import InputLabel from '../InputLabel';

interface Props {
  autoComplete?: string;
  autoFocus?: boolean;
  children?: React.ReactNode;
  className?: string;
  defaultValue: any;
  disabled?: boolean;
  error?: boolean;
  FormHelperTextProps: object;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  id: string;
  InputLabelProps?: object;
  inputProps?: object;
  inputRef?: React.Ref<any>;
  label?: React.ReactNode;
  multiline?: boolean;
  name: string;
  onBlur?: (ev: SyntheticEvent<any>) => void;
  onChange: (ev: SyntheticEvent<any>) => void;
  onFocus?: (ev: SyntheticEvent<any>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: string | number;
  select?: boolean;
  SelectProps?: object;
  type?: string;
  value: any;
  variant?: 'standard';
  startAdornment?: any;
  endAdornment?: any;
}
const variantInputComponent = {
  standard: Input,
};

const TextField = React.forwardRef<Props, any>(function TextField(props, ref) {
  const {
    autoComplete,
    autoFocus,
    children,
    className,
    defaultValue,
    error,
    FormHelperTextProps,
    fullWidth,
    helperText,
    id,
    InputLabelProps,
    inputProps,
    label,
    multiline,
    name,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps,
    type,
    value,
    variant = 'standard',
    startAdornment,
    endAdornment,
    ...rest
  } = props;

  // warning(
  //   !select || !children,
  //   'Nexoya: `select` is not implemented for `TextField` just yet'
  // );

  const InputMore = {};

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const InputComponent = variantInputComponent[variant];

  return (
    <FormControl
      ref={ref}
      className={className}
      fullWidth={fullWidth}
      pretendFilled={!!placeholder}
      required={required}
      {...rest}
    >
      {!label ? null : <InputLabel htmlFor={id || name}>{label}</InputLabel>}
      {select ? null : (
        <InputComponent
          aria-describedby={helperTextId}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          multiline={multiline}
          name={name}
          rows={rows}
          inputRef={inputRef}
          type={type}
          value={value}
          id={id || name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          inputProps={inputProps}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          // required={required}
          {...InputMore}
        />
      )}
      {/* {!helperText ? null : (
          <FormHelperText id={helperTextId}>{helperText}</FormHelperText>
        )} */}
    </FormControl>
  );
});

export default TextField;