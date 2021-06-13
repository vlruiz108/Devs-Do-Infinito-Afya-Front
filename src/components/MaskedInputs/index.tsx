import React from 'react';

import { TextField } from '@material-ui/core';
import MaskedInput from 'react-text-mask';


interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

export function TextMaskCurrency(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\n/, /\n/, /\n/, '.', /\n/, /\n/, /\n/, '.', /\n/, /\n/, /\n/, ',', /\n/, /\n/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

function TextMaskCPF(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

export const CPFInput: React.FC<{
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  color?: "primary" | "secondary" | undefined;
  error?: true | false | undefined;
  required?: true | false | undefined;
}> = (props) => {

  return (
    <TextField
      label={props.label}
      color={props.color}
      onChange={props.onChange}
      name="textmask"
      error={props.error}
      required={props.required}
      InputProps={{
        inputComponent: TextMaskCPF as any,
      }}
    />
  );
}

function TextMaskPhone(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

export const PhoneInput: React.FC<{
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  color?: "primary" | "secondary" | undefined;
}> = (props) => {

  return (
    <TextField
      label={props.label}
      color={props.color}
      onChange={props.onChange}
      name="textmask"
      required
      InputProps={{
        inputComponent: TextMaskPhone as any,
      }}
    />
  );
}

function TextMaskZip(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

export const ZipInput: React.FC<{
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  color?: "primary" | "secondary" | undefined;
  error?: true | false | undefined;
  required?: true | false | undefined;
}> = (props) => {

  return (
    <TextField
      label={props.label}
      color={props.color}
      error={props.error}
      onChange={props.onChange}
      name="textmask"
      required={props.required}
      InputProps={{
        inputComponent: TextMaskZip as any,
      }}
    />
  );
}