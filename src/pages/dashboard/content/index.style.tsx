import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`;

export const ModalCard = styled.div`
  position: relative;
  z-index: 1001;
  width: 680px;
  max-width: 92vw;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  border-radius: 6px;

  &:hover {
    background: #f3f4f6;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 800;
  margin: 0 0 12px 0;
`;

export const DescList = styled.ol`
  margin: 8px 0 16px 0;
  padding-left: 20px;
  color: #4b5563;
  line-height: 1.6;

  & > li {
    margin: 6px 0;
  }
`;

export const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  user-select: none;

  input {
    width: 16px;
    height: 16px;
  }
`;

export const Footer = styled.div`
  margin-top: 16px;
  text-align: right;
`;

export const OutlineButton = styled.button`
  color: white;
  cursor: pointer;
  border: 1px solid black;
  background-color: var(--main-color);
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.7;
  }
`;
