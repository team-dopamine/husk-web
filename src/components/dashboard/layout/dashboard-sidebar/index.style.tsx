import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 220px;
  height: 100vh;
  background-color: var(--main-color);
  opacity: 50px;
  padding-top: 92px;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: white;
    color: var(--main-color);
    div {
      background-color: #cbcbcb !important;
    }
  }
`;

export const ButtonImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 13px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
