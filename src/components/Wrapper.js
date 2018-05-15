import styled from "styled-components";
import { rhythm, scale } from '../utils/typography'

export const PageWrapper = styled.div``;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  min-height: ${({minHeight})=> minHeight ? minHeight : null}
`;
