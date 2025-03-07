import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  overflow-x: hidden;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled.a`
  text-decoration: none;
  font-size: 28px;
  font-weight: 600;
  color: black;

  &:hover,
  &:visited,
  &:active {
    color: black;
  }
`;

export const LogoImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  opacity: 10%;
`;

export const UserActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ActionButton = styled.a`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: black;
  padding: 0px;
`;
