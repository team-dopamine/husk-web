import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 220px;
  height: 100vh;
  background-color: #f2f2f2;
  padding-top: 92px;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const SidebarItem = styled.div`
  display: flex;
  padding: 16px 20px;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const ButtonImg = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: #e6e6e6;
`;
