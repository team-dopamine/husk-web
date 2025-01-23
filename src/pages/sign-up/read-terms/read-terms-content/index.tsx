import { useEffect, useState } from 'react';
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
import getTermsOfService from 'api/read-terms';

const ReadTermsContent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [termsContent, setTermsContent] = useState('약관을 불러오는 중입니다...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const terms = await getTermsOfService();
        console.log('약관 내용:', terms);
        setTermsContent(terms);
      } catch (err) {
        setError('약관을 불러오는 중 오류가 발생했습니다.');
      }
    };

    fetchTerms();
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign Up</Title>
        <TermsWrapper>
          <Label>이용약관</Label>
          <TermsTextarea readOnly value={error || termsContent} />
          <AgreementCheckboxWrapper>
            <AgreementText>상기 내용에 동의합니다.</AgreementText>
            <HiddenCheckbox type="checkbox" id="customCheckbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            <StyledCheckbox htmlFor="customCheckbox" />
          </AgreementCheckboxWrapper>
        </TermsWrapper>
        <ButtonGroup>
          <PreviousButton type="primary" href="/sign-in">
            Previous
          </PreviousButton>
          <NextButton type="primary" disabled={!isChecked} href="/sign-up">
            Next
          </NextButton>
        </ButtonGroup>
      </ContentWrapper>
    </Container>
  );
};

export default ReadTermsContent;
