import styled, { css } from "styled-components";

const commonStyles = css`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: 16px;
  text-decoration: none;
`;

export const Title1 = styled.h1`
  ${ commonStyles }
  font-size: 1.5rem;
`;
Title1.displayName = 'Title1';

export const Paragraph = styled.p`
  ${ commonStyles }
  font-size: 1rem;
`;
Paragraph.displayName = 'Paragraph';
