import React, { useState, useEffect } from 'react';
import { EmailWrapper, FormContainer, Label, InputField, RequestCodeButton, VerifyWrapper, VerifyButton, Timer, EmailFieldWrapper, Message } from './index.style';
import postSendCode from 'api/send-code';

interface EmailVerifyProps {
  onInputChange: (email: string, code: string) => void;
}

const EmailVerify: React.FC<EmailVerifyProps> = ({ onInputChange }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [showCodeVerify, setShowCodeVerify] = useState(false);
  const [timer, setTimer] = useState(300);
  const [alertShown, setAlertShown] = useState(false);
  const [emailDisabled, setEmailDisabled] = useState(false);

  useEffect(() => {
    const savedTimer = sessionStorage.getItem('timer');
    const savedEmailDisabled = sessionStorage.getItem('emailDisabled');
    const savedShowCodeVerify = sessionStorage.getItem('showCodeVerify');

    if (savedTimer && Number(savedTimer) > 0) {
      setTimer(Number(savedTimer));
    } else {
      setTimer(0);
    }

    setEmailDisabled(savedEmailDisabled === 'true' && Number(savedTimer) > 0);
    setShowCodeVerify(savedShowCodeVerify === 'true' && Number(savedTimer) > 0);
  }, []);

  useEffect(() => {
    if (showCodeVerify && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => Math.max(prev - 1, 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showCodeVerify, timer]);

  useEffect(() => {
    sessionStorage.setItem('timer', timer.toString());

    if (timer === 0 && showCodeVerify) {
      alert('인증 코드가 만료되었습니다. 다시 요청해주세요.');
      setShowCodeVerify(false);
      setEmailDisabled(false);
      setAlertShown(true);
      sessionStorage.clear();
    }
  }, [timer, showCodeVerify]);

  useEffect(() => {
    sessionStorage.setItem('showCodeVerify', showCodeVerify.toString());
  }, [showCodeVerify]);

  const handleRequestCode = async () => {
    try {
      if (!email) {
        alert('이메일을 입력해주세요.');
        return;
      }

      await postSendCode({ email, code: '' });

      setShowCodeVerify(true);
      setTimer(300);
      setAlertShown(false);
      setEmailDisabled(true);
    } catch (error) {
      console.error('인증 코드 요청 중 오류 발생:', error);
      setShowCodeVerify(false);
      setEmailDisabled(false);
      alert(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    onInputChange(value, code);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCode(value);
    onInputChange(email, value);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <FormContainer showCodeVerify={showCodeVerify}>
      <Label>Email</Label>
      <EmailWrapper>
        <EmailFieldWrapper>
          <InputField id="email" type="email" placeholder="Enter your Email" value={email} onChange={handleEmailChange} disabled={emailDisabled} />
          <RequestCodeButton type="primary" onClick={handleRequestCode} disabled={emailDisabled}>
            Request Code
          </RequestCodeButton>
        </EmailFieldWrapper>
        {emailDisabled && <Message>Send the Verify Code</Message>}
      </EmailWrapper>

      {showCodeVerify && (
        <>
          <Label>Verify Code</Label>
          <VerifyWrapper>
            <InputField id="code" type="text" placeholder="Code" value={code} onChange={handleCodeChange} />
            <VerifyButton type="primary">Verify</VerifyButton>
            {/* TODO: API 연결 후 Verify 클릭 시 인증 성공 알림 */}
          </VerifyWrapper>
          <Timer>{formatTime(timer)}</Timer>
        </>
      )}
    </FormContainer>
  );
};

export default EmailVerify;
