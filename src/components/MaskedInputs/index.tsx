import React from 'react';

import { TextField } from '@material-ui/core';
import MaskedInput from 'react-text-mask';

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
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
}> = (props) => {

  return (
    <TextField
      label={props.label}
      color={props.color}
      onChange={props.onChange}
      name="textmask"
      required
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
}> = (props) => {

  return (
    <TextField
      label={props.label}
      color={props.color}
      onChange={props.onChange}
      name="textmask"
      required
      InputProps={{
        inputComponent: TextMaskZip as any,
      }}
    />
  );
}