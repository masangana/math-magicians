import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/Nav';
import { render } from '@testing-library/react';

const MockNav = () => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
);

test('renders correctly', () => {
  const tree = renderer
    .create(<MockNav />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
