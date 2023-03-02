import {
  color,
  layout,
  shadow,
  grid,
  flexbox,
  background,
  space,
  typography,
  border,
  position,
} from 'styled-system';
import styled from 'styled-components';

export const Box = styled.div(
  {
    boxSizing: 'border-box',
  },
  color,
  layout,
  shadow,
  grid,
  flexbox,
  background,
  space,
  typography,
  border,
  position
);
