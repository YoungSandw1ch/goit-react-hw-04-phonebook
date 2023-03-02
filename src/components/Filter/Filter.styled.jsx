import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  column-gap: ${({ theme }) => theme.space[3]}px;
  color: ${({ theme }) => theme.colors.greyFontColor};
  transition: color 250ms linear;

  :focus-within {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

export const Span = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.text.caps.customLetterSpacing};
`;

export const Input = styled.input`
  width: ${({ theme }) => theme.sizes.full};
  height: ${({ theme }) => theme.sizes.inputHeight};

  border-radius: ${({ theme }) => theme.radii.medium};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.greyFontColor};
  outline: none;
  transition: all 250ms linear;

  :focus {
    border-color: ${({ theme }) => theme.colors.darkBlue};
    border-radius: ${({ theme }) => theme.radii.normal};
  }
`;
