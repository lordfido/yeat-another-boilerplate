import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Bitcoin from '.'

describe('containers/Bitcoin', () => {
  describe('component properly mounted', () => {
    it('should render title and text-body elements', async () => {
      render(<Bitcoin />)

      await waitFor(() => {
        expect(screen.getByText('Bitcoin value')).toBeInTheDocument();
      })
      
      await waitFor(() => {
        expect(screen.getByText('20.00 USD')).toBeInTheDocument()
      })
    })
  })
})
