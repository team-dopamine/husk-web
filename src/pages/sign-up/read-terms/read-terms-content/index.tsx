import { useState } from 'react';
import {
  Label,
  HiddenCheckbox,
  StyledCheckbox,
  Container,
  ContentWrapper,
  Title,
  ButtonGroup,
  PreviousButton,
  NextButton,
  TermsWrapper,
  TermsTextarea,
  AgreementCheckboxWrapper,
  AgreementText,
} from './index.style';

const ReadTermsContent = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign Up</Title>
        <TermsWrapper>
          <Label>약관</Label>
          <TermsTextarea readOnly value="약관 내용" />
          <AgreementCheckboxWrapper>
            <AgreementText>상기 내용에 동의합니다.</AgreementText>
            <HiddenCheckbox type="checkbox" id="customCheckbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            <StyledCheckbox htmlFor="customCheckbox" />
          </AgreementCheckboxWrapper>
        </TermsWrapper>
        <ButtonGroup>
          <PreviousButton type="primary" href="/sign-up">
            Previous
          </PreviousButton>
          <NextButton type="primary" disabled={!isChecked}>
            Next
          </NextButton>
        </ButtonGroup>
      </ContentWrapper>
    </Container>
  );
};

export default ReadTermsContent;
