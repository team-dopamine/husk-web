import { useState } from 'react';
import { Overlay, Backdrop, ModalCard, CloseButton, Title, DescList, CheckboxRow, Footer, OutlineButton } from './index.style';

type GuideModalProps = {
  open: boolean;
  onClose: (dontShowAgain?: boolean) => void;
};

const Content = ({ open, onClose }: GuideModalProps) => {
  const [dontShow, setDontShow] = useState(false);
  if (!open) return null;

  const handleClose = () => onClose(dontShow);

  return (
    <Overlay role="dialog" aria-modal="true">
      <Backdrop onClick={handleClose} />
      <ModalCard>
        <CloseButton aria-label="닫기" onClick={handleClose}>
          ×
        </CloseButton>

        <Title>HUSK 사용 가이드</Title>

        <DescList>
          <li>키 등록: KeyChain에서 우측의 + 카드를 눌러 PEM 개인키 내용을 붙여넣고 저장하세요.</li>
          <li>
            연결 생성: 좌측 <b>SSH Connection</b>에서 서버 정보(호스트/포트/유저)를 입력하고 방금 등록한 키체인을 선택하세요.
          </li>
          <li>터미널 접속: 연결 카드를 누르면 웹터미널이 열립니다.</li>
          <li>관리: 키체인 카드의 ⋮ 메뉴에서 이름 변경/삭제가 가능합니다.</li>
        </DescList>

        <CheckboxRow>
          <input type="checkbox" checked={dontShow} onChange={(e) => setDontShow(e.target.checked)} />
          다음부터 이 안내를 보지 않기
        </CheckboxRow>

        <Footer>
          <OutlineButton onClick={handleClose}>시작하기</OutlineButton>
        </Footer>
      </ModalCard>
    </Overlay>
  );
};

export default Content;
