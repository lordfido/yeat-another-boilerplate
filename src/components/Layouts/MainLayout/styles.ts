
import styled, { css } from 'styled-components';

const headerCss = css`
  display: flex;
  flex-direction: row;
  height:  48px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ::before {
    ${ headerCss }
    content: ' ';
  }
`;
Wrapper.displayName = 'Wrapper';

export const Header = styled.header`
  ${ headerCss }
  position: fixed;
  top: 0;
  left: 0;
`;
Header.displayName = 'Header';

export const Content = styled.main`
  display: flex:
  flex: 1;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;
Content.displayName = 'Content';
