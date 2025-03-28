import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 272px;
  height: 40px;
  align-items: center;
  background-color: #222;
  border-radius: 20px;
  padding: 10px 20px;
`;

export const ActionButton = styled.button`
  width: 272px;
  height: 40px;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
