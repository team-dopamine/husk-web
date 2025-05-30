import React from 'react';
import { InputWrapper, InputContainer, Label, InputField, TextAreaField } from '../index.style';

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
          {field.type === 'textarea' ? (
            <TextAreaField value={inputValues[index]} onChange={(e) => onChange(index, e.target.value)} readOnly={!showKeychain} placeholder={field.placeholder} isVisible={showKeychain} />
          ) : (
            <InputField
              type={field.type === 'password' && showKeychain ? 'text' : field.type || 'text'}
              value={inputValues[index]}
              onChange={(e) => onChange(index, e.target.value)}
              readOnly={field.type === 'password' && !showKeychain}
              placeholder={field.placeholder}
            />
          )}
        </InputContainer>
      ))}
    </InputWrapper>
  );
};

export default InputGroup;
