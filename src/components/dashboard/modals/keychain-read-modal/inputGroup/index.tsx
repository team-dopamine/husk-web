import React from 'react';
import { InputWrapper, InputContainer, Label, InputField } from '../index.style';

interface Props {
  fields: { label: string; placeholder: string }[];
  inputValues: string[];
  onChange: (index: number, value: string) => void;
}

const InputGroup: React.FC<Props> = ({ fields, inputValues, onChange }) => {
  return (
    <InputWrapper>
      {fields.map((field, index) => (
        <InputContainer key={index}>
          <Label>{field.label}</Label>
          <InputField placeholder={field.placeholder} value={inputValues[index]} onChange={(e) => onChange(index, e.target.value)} />
        </InputContainer>
      ))}
    </InputWrapper>
  );
};

export default InputGroup;
