import React from 'react';
import { PreviousButton, NextButton, ButtonGroup } from './index.style';

interface ButtonConfig {
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface NavigationButtonsProps {
  previousButton: ButtonConfig;
  nextButton: ButtonConfig;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ previousButton, nextButton }) => {
  return (
    <ButtonGroup>
      {previousButton.href ? (
        <PreviousButton type="primary" href={previousButton.href} disabled={previousButton.disabled ?? false} onClick={previousButton.onClick}>
          {previousButton.label}
        </PreviousButton>
      ) : (
        <PreviousButton type="primary" disabled={previousButton.disabled ?? false} onClick={previousButton.onClick}>
          {previousButton.label}
        </PreviousButton>
      )}

      {nextButton.href ? (
        <NextButton type="primary" href={nextButton.href} disabled={nextButton.disabled ?? true} onClick={nextButton.onClick}>
          {nextButton.label}
        </NextButton>
      ) : (
        <NextButton type="primary" disabled={nextButton.disabled ?? false} onClick={nextButton.onClick}>
          {nextButton.label}
        </NextButton>
      )}
    </ButtonGroup>
  );
};

export default NavigationButtons;
