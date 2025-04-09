import styled from 'styled-components';

// TODO: 추후 웹터미널이 될 페이지 입니다
const TestPage = () => {
  return (
    <SshConnectionContainer>
      <h1>웹터미널</h1>
    </SshConnectionContainer>
  );
};

export default TestPage;

export const SshConnectionContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 176px;
  margin-left: 280px;
`;
