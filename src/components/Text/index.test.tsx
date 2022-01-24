import { render, screen } from '@testing-library/react';
import React from 'react';
import Text from '.';

describe('components/Text', () => {
  it('should render a valid title', async () => {
    render(<Text variant="title1">Title</Text>);

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading').tagName).toBe('H1');
    expect(screen.getByRole('heading').innerHTML).toBe('Title');
  })

  it('should render a valid paragraph', async () => {
    render(<Text variant="body1">Text</Text>);

    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('Text').tagName).toBe('P');
  })
})
