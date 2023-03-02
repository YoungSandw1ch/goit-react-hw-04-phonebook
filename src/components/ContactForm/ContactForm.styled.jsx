import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.greyFontColor};

  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 3px;

  margin-bottom: ${({ theme }) => theme.space[4]}px;
  transition: all 250ms linear;

  :focus-within {
    color: ${({ theme }) => theme.colors.darkBlue};
    letter-spacing: 6px;
  }
`;

export const Input = styled.input`
  margin-top: ${({ theme }) => theme.space[2]}px;

  width: ${({ theme }) => theme.sizes.full};
  height: ${({ theme }) => theme.sizes.inputHeight};

  border-radius: ${({ theme }) => theme.radii.medium};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.greyFontColor};
  outline: none;

  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;

  font-size: ${({ theme }) => theme.fontSizes.m};

  color: ${({ theme }) => theme.colors.fistFontColor};
  transition: border-radius 250ms linear;

  :focus {
    border-color: ${({ theme }) => theme.colors.darkBlue};
    border-radius: ${({ theme }) => theme.radii.normal};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 35px;

  margin: 0 auto;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  border-radius: ${({ theme }) => theme.radii.normal};
  border: none;

  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.normal};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
