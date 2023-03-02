import { color, background, space, typography } from 'styled-system';
import styled from 'styled-components';

export const Title = styled.h1(
  {
    textAlign: 'center',
  },
  color,
  typography,
  background,
  space
);
