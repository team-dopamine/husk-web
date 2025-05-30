import styled from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

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

export const LogoWrapper = styled(Link)`
  gap: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
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

export const HuskLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const UserActionButtons = styled.div``;

export const EditProfileButton = styled(Button)`
  background-color: black !important;
  opacity: 50% !important;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: white !important;
    color: gray !important;
    font-weight: 700;
    border-color: gray !important;
  }
`;

export const LogoutButton = styled(Button)`
  background-color: var(--main-color) !important;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: white !important;
    color: var(--main-color) !important;
    font-weight: 600;
    border-color: var(--main-color) !important;
  }
`;
