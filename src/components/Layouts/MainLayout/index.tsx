import React, { PropsWithChildren } from 'react';
import { Content, Header, Wrapper } from './styles';

interface Props {
  className?: string;
}

const MainLayout: React.FC<PropsWithChildren<Props>> = ({ children, className = '' }) => (
  <Wrapper className={`MainLayout ${ className }`}>
    <Header className="MainLayout-header" />

    <Content className="MainLayout-content">
      { children }
    </Content>
  </Wrapper>
);

export default MainLayout;
