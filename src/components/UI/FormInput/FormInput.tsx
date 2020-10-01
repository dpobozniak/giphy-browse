import React, { FunctionComponent, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input`
  appearance: none;
  border: 1px solid #d2d6dc;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.3em;
  font-family: inherit;
  font-size: 100%;
  height: 100%;
  padding: 0.6em 0.7em;
  width: 100%;
`;

const Label = styled.span<{ labelHidden?: boolean}>`
  display: block;
  font-size: 90%;
  margin-bottom: 0.3em;

  ${props => props.labelHidden && css`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `}
`;

type InputProps = {
  autocomplete?: string,
  disabled?: boolean,
  id: string,
  label: string,
  labelHidden?: boolean,
  list?: string,
  name: string,
  onChange: (event: ChangeEvent) => void,
  placeholder?: string,
  required?: boolean,
  type: string,
  value: string,
};

const FormInput: FunctionComponent<InputProps> = ({
  id, label, list, name, onChange, required, type = 'text', value, autocomplete,
  disabled, placeholder, labelHidden = false,
}: InputProps) => {
  return (
    <label htmlFor={id}>
      <Label labelHidden={labelHidden}>{label}</Label>
      <Input
        autoComplete={autocomplete}
        disabled={disabled}
        id={id}
        list={list}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </label>
  );
};

export default FormInput;
