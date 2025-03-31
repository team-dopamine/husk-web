import React from 'react';
import { InputWrapper, InputContainer, Label, InputField } from '../index.style';

interface Props {
  fields: { label: string; placeholder: string; type?: string }[];
  inputValues: string[];
  onChange: (index: number, value: string) => void;
  showKeychain?: boolean;
}

const InputGroup: React.FC<Props> = ({ fields, inputValues, onChange, showKeychain = false }) => {
  return (
    <InputWrapper>
      {fields.map((field, index) => (
        <InputContainer key={index}>
          <Label>{field.label}</Label>
          <InputField type={field.type === 'password' && showKeychain ? 'text' : field.type || 'text'} value={inputValues[index]} onChange={(e) => onChange(index, e.target.value)} />
        </InputContainer>
      ))}
    </InputWrapper>
  );
};

export default InputGroup;
