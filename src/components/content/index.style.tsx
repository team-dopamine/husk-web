import styled from 'styled-components';

const Button = styled.div`
  width: 240px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px;
  position: relative;
  margin-top: 80px;
  z-index: 1;
`;

export const Title = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`;

export const Desc = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const FunctButton = styled(Button)`
  color: white;
  border: 1px solid white;
  background-color: transparent;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const StartButton = styled(Button)`
  color: white;
  background-color: black;
  border: 1px solid black;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin: 80px 0;
  padding: 40px;
`;

export const Img = styled.div`
  width: 520px;
  height: 390px;
  background-color: #d9d9d980;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const MainTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: black;
`;

export const MainDesc = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;
