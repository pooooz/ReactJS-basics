import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FuncMessageList } from './FuncMessageList';

describe('FuncMessageList', () => {
  it('Render component', () => {
    render(
      <FuncMessageList messages={[{ text: 'Render', author: 'Render' }]} />
    );
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(
      <FuncMessageList messages={[{ text: 'Render', author: 'Render' }]} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render with text', () => {
    render(
      <FuncMessageList messages={[{ text: 'Render', author: 'Render' }]} />
    );
    expect(screen.getByText(/Author: <\w*>/));
  });
});
