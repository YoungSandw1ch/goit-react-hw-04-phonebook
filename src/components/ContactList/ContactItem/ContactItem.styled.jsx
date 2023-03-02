import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;
  border-radius: ${({ theme }) => theme.radii.normal};

  font-size: ${({ theme }) => theme.fontSizes.m};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBlue};

  padding: ${({ theme }) => theme.space[3]}px;
  transition: transform 250ms ease-in-out;

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }

  :hover {
    transform: scaleX(1.04);
  }
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  letter-spacing: 2px;
  height: ${({ theme }) => theme.sizes.contactHeight};
`;

export const Span = styled.span`
  letter-spacing: 3px;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;

  border-radius: ${({ theme }) => theme.radii.normal};
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkBlue};
  box-shadow: ${({ theme }) => theme.shadows.normal};

  :hover,
  :focus {
    /* background-color: ${({ theme }) => theme.colors.blue}; */
    color: ${({ theme }) => theme.colors.red};
  }
`;
