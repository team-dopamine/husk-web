// index.style.ts
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 9998;
`;

export const ModalContainer = styled.div`
  width: 140px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 4px 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

  position: fixed;
  top: 70px;
  right: 54px;
  z-index: 9999;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 16px;
    width: 12px;
    height: 12px;
    background: #ffffff;
    transform: rotate(45deg);
    box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.05);
  }
`;

export const LanguageList = styled.ul`
  list-style: none;
  padding: 5px;
  margin: 0;
`;

export const LanguageListItem = styled.li`
  width: 100%;
`;

export const LanguageOptionButton = styled.button<{ $active: boolean }>`
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 8px 12px;
  border: none;
  margin: 0;
  text-align: left;
  cursor: pointer;
  font-size: 14px;

  background-color: ${({ $active }) => ($active ? '#f3f4f6' : 'transparent')};
  border-radius: ${({ $active }) => ($active ? '5px' : '0')};

  &:hover {
    border-radius: 5px;
    background-color: #f3f4f6;
  }
`;
