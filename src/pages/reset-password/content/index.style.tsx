import styled from 'styled-components';

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

export const PasswordWrapper = styled.div`
  margin-bottom: 25px;
  flex-direction: column;
`;

export const Message = styled.label`
  color: #7f7f7f;
  margin: 0;
  font-size: 12px;
`;
