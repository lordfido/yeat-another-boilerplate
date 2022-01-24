import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 12px;
  max-width: 100%;
`;
Wrapper.displayName = 'Wrapper';


interface ToolbarProps {
  align?: 'flex-start' | 'center' | 'flex-end';
}

const getDerivedTextAlign = (align: ToolbarProps['align']) => {
  switch (align) {
    case 'center':
      return 'center';

    case 'flex-end':
      return 'right';

    case 'flex-start':
    default:
      return 'left';
  }
}

export const Toolbar = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${ ({ align = 'flex-end' }: ToolbarProps) => align };
  margin: 12px 0;
  min-height: 64px;
  text-align: ${ ({ align = 'flex-end' }: ToolbarProps) => getDerivedTextAlign(align) };
`;
Toolbar.displayName = 'Toolbar';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 12px 0;
`;
Content.displayName = 'Content';
