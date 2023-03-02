import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  padding-top: ${({ theme }) => theme.space[5]}px;
  padding-bottom: ${({ theme }) => theme.space[5]}px;

  width: ${({ theme }) => theme.sizes.half};
  border: ${({ theme }) => theme.borders.medium};
  border-radius: ${({ theme }) => theme.radii.normal};
  border-color: ${({ theme }) => theme.colors.blue};
  box-shadow: ${({ theme }) => theme.shadows.phoneBook};
  background-color: ${({ theme }) => theme.colors.autumnOrange.cotton};
`;
