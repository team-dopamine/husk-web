import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

import { ModalOverlay, ModalContainer, LanguageList, LanguageListItem, LanguageOptionButton } from './index.style';

type Lang = 'ko' | 'en' | 'zh';

interface LanguageModalProps {
  onClose: () => void;
}

const LanguageModal = ({ onClose }: LanguageModalProps) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<Lang>('ko');

  useEffect(() => {
    if (i18n.resolvedLanguage) {
      setSelectedLanguage(i18n.resolvedLanguage as Lang);
    }
  }, [i18n.resolvedLanguage]);

  const selectLanguage = (lang: Lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    onClose();
  };

  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <LanguageList>
          <LanguageListItem>
            <LanguageOptionButton $active={selectedLanguage === 'ko'} onClick={() => selectLanguage('ko')}>
              한국어
            </LanguageOptionButton>
          </LanguageListItem>

          <LanguageListItem>
            <LanguageOptionButton $active={selectedLanguage === 'en'} onClick={() => selectLanguage('en')}>
              English
            </LanguageOptionButton>
          </LanguageListItem>

          <LanguageListItem>
            <LanguageOptionButton $active={selectedLanguage === 'zh'} onClick={() => selectLanguage('zh')}>
              中文
            </LanguageOptionButton>
          </LanguageListItem>
        </LanguageList>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default LanguageModal;
