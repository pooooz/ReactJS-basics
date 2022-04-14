import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClassMessageList } from './ClassMessageList';

describe('ClassMessageList', () => {
  it('Render component', () => {
    render(
      <ClassMessageList messages={[{ message: 'Render', author: 'Render' }]} />
    );
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(
      <ClassMessageList messages={[{ message: 'Render', author: 'Render' }]} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render with text', () => {
    render(
      <ClassMessageList messages={[{ message: 'Render', author: 'Render' }]} />
    );
    expect(screen.getByText(/Author: <\w*>/));
  });
});
