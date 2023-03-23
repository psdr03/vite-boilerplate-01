import { render } from '@testing-library/react';
import { Box } from '.';

describe('test box', () => {
  it('should render box', () => {
    const { getByText } = render(<Box />);
    expect(getByText('This is a box')).toBeInTheDocument();
  });
});
