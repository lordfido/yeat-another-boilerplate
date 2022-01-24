import React, { PropsWithChildren } from 'react';
import { Paragraph, Title1 } from './styles'

interface Props {
  variant: 'title1' | 'body1';
}

const Text: React.FC<PropsWithChildren<Props>> = ({ children, variant }) => {
  switch (variant) {
    case 'title1':
      return <Title1>{ children }</Title1>;

    case 'body1':
    default:
      return <Paragraph>{ children }</Paragraph>
  }
};

export default Text;
