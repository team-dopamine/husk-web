import styled from 'styled-components';

export const HiddenCheckbox = styled.input`
  display: none;
`;

export const StyledCheckbox = styled.label`
  width: 13px;
  height: 13px;
  border: 2.5px solid #000;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  ${HiddenCheckbox}:checked + &::after {
    content: '✔';
    font-size: 13px;
    color: #000;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px);
  flex: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 492px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
`;

export const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
`;

export const TermsTextarea = styled.textarea`
  width: 100%;
  height: 298px;
  margin-top: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  resize: none;
  font-size: 14px;
  color: #333;
  opacity: 50%;
  box-sizing: border-box;
  padding: 12px;

  &:focus {
    outline: none;
  }
`;

export const AgreementCheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export const AgreementText = styled.div`
  font-size: 14px;
  color: black;
  opacity: 50%;
`;

export const Label = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 4px;
`;
