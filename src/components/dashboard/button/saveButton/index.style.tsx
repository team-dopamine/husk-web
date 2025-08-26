import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 272px;
  height: 40px;
  align-items: center;
  background-color: var(--main-color);
  border-radius: 20px;
  padding: 10px 20px;
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 100%;

  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  outline: none;
  transition:
    background-color 0.2s,
    opacity 0.2s,
    cursor 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    border-radius: 10px;
    cursor: not-allowed;
  }
`;
