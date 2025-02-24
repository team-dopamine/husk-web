import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EmailWrapper, FormContainer, Label, InputField, RequestCodeButton, VerifyWrapper, VerifyButton, Timer, EmailFieldWrapper, Message } from './index.style';
import postSendCode from 'api/send-code';
import postVerifyCode from 'api/verify-code';
import postResetPasswordVerify from 'api/reset-password';

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
  const [passwordDisabled, setPasswordDisabled] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { pathname } = useLocation(); // 현재 페이지 경로 가져오기

  useEffect(() => {
    const savedTimer = sessionStorage.getItem('timer');

    if (savedTimer && Number(savedTimer) > 0) {
      setTimer(Number(savedTimer));
    } else {
      setTimer(0);
    }
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

  const handleRequestCode = async () => {
    try {
      if (!email) {
        alert('이메일을 입력해주세요.');
        return;
      }
      const api = pathname.includes('reset-password') ? postResetPasswordVerify : postSendCode;

      await api({ email, code: '' });

      if (api === postSendCode) {
        setShowCodeVerify(true);
        setTimer(300);
        setEmailDisabled(true);
      } else {
        setIsVerified(true);
        onInputChange(email, '');
        setPasswordDisabled(true);
      }
      setAlertShown(false);
    } catch (error) {
      console.error('인증 코드 요청 중 오류 발생:', error);
      setShowCodeVerify(false);
      setEmailDisabled(false);
      alert(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
    }
  };

  const handleVerifyCode = async () => {
    try {
      if (!email.trim() || !code.trim()) {
        alert('이메일과 인증 코드를 입력해주세요.');
        return;
      }

      await postVerifyCode({ email, authCode: code });
      setIsVerified(true);
      onInputChange(email, code);
    } catch (error) {
      console.error('인증 코드 검증 중 오류 발생:', error);
      alert(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    onInputChange('', '');
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    onInputChange('', '');
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
        {passwordDisabled && <Message>Send the temporary password</Message>}
      </EmailWrapper>

      {showCodeVerify && (
        <>
          <Label>Verify Code</Label>
          <VerifyWrapper>
            <InputField id="code" type="text" placeholder="Code" value={code} onChange={handleCodeChange} />
            <VerifyButton type="primary" onClick={handleVerifyCode}>
              Verify
            </VerifyButton>
          </VerifyWrapper>
          <Timer>{formatTime(timer)}</Timer>
        </>
      )}
    </FormContainer>
  );
};

export default EmailVerify;
