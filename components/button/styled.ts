import styled from 'styled-components';

import type { ThemeInputSizes } from '@/styles/themes';

const Button = styled.button<{
  $size: ThemeInputSizes;
}>`
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => (p.$size === 'small' ? p.theme.fontSizes.bodySmall : p.theme.fontSizes.body)};
  line-height: ${p => p.theme.inputSizes[p.$size]};
  height: ${p => p.theme.inputSizes[p.$size]};
  padding: 0 ${p => (p.$size === 'large' ? p.theme.spacingDouble : p.theme.spacing)};
  margin-bottom: ${p => p.theme.spacing};
  transition: opacity ${p => p.theme.transitionSpeed};

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${p => p.theme.colors.brandPrimary};
  color: ${p => p.theme.colors.surface1};
`;

export const SecondaryButton = styled(Button)`
  background: ${p => p.theme.colors.text2};
  color: ${p => p.theme.colors.surface1};
`;
