import React, { useState } from 'react';
import { FormContainer, Label, InputField, Message, PasswordWrapper } from './index.style';

const isValidPassword = (value: string): boolean => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  return regex.test(value);
};

const fields = [
  { id: 'password', label: 'Password', placeholder: 'Enter your Password', showMessage: true },
  { id: 'passwordVerify', label: 'Password Verify', placeholder: 'Verify your Password', showMessage: false },
];

const createInitialState = () => ({
  inputs: { password: '', passwordVerify: '' },
  isValid: { password: true, passwordVerify: true },
  touched: { password: false, passwordVerify: false },
});

interface PasswordProps {
  onInputChange: (password: string, passwordVerify: string) => void;
}

const PasswordSetting: React.FC<PasswordProps> = ({ onInputChange }) => {
  const [state, setState] = useState(createInitialState);

  React.useEffect(() => {
    const savedPassword = localStorage.getItem('password') || '';
    const savedPasswordVerify = localStorage.getItem('passwordVerify') || '';

    setState((prev) => ({
      ...prev,
      inputs: {
        password: savedPassword,
        passwordVerify: savedPasswordVerify,
      },
      isValid: {
        password: isValidPassword(savedPassword),
        passwordVerify: savedPasswordVerify === savedPassword,
      },
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setState((prev) => {
      const updatedInputs = { ...prev.inputs, [id]: value };
      const updatedIsValid = {
        ...prev.isValid,
        [id]: id === 'password' ? isValidPassword(value) : value === updatedInputs.password,
      };

      // 로컬 스토리지에 비밀번호와 확인 비밀번호 저장
      sessionStorage.setItem('password', updatedInputs.password);
      sessionStorage.setItem('passwordVerify', updatedInputs.passwordVerify);

      onInputChange(updatedInputs.password, updatedInputs.passwordVerify);

      return { ...prev, inputs: updatedInputs, isValid: updatedIsValid };
    });
  };

  const handleFocus = (id: string) => {
    setState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [id]: true },
    }));
  };
  const renderMessage = (id: string, showMessage: boolean): React.ReactNode => {
    if (!state.touched[id as keyof typeof state.touched]) return null;

    if (showMessage && id === 'password' && !state.isValid.password) {
      return <Message isError>8~16자 영문 대 소문자, 숫자, 특수문자를 포함해야 합니다.</Message>;
    }

    if (id === 'passwordVerify' && !state.isValid.passwordVerify) {
      return <Message isError>비밀번호가 일치하지 않습니다.</Message>;
    }

    return null;
  };

  return (
    <FormContainer showCodeVerify={true}>
      {fields.map(({ id, label, placeholder, showMessage }) => (
        <PasswordWrapper key={id}>
          <Label>{label}</Label>
          <InputField
            id={id}
            type="password"
            placeholder={placeholder}
            value={state.inputs[id as keyof typeof state.inputs]}
            isError={state.touched[id as keyof typeof state.touched] && !state.isValid[id as keyof typeof state.isValid]}
            onChange={handleChange}
            onFocus={() => handleFocus(id)}
          />
          {renderMessage(id, showMessage)}
        </PasswordWrapper>
      ))}
    </FormContainer>
  );
};

export default PasswordSetting;
