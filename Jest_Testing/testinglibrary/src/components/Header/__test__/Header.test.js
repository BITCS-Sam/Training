import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same test passed into title props', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});


// it('should render same test passed into title props', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByRole("heading")
//     expect(headingElement).toBeInTheDocument();
// });


// it('should render same test passed into title props', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByRole("heading", { name: "My Header" })
//     expect(headingElement).toBeInTheDocument();
// });

// it('should render same test passed into title props', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTitle("Header")
//     expect(headingElement).toBeInTheDocument();
// });

// it('should render same test passed into title props', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getAllByRole("heading")
//     expect(headingElement.length).toBe(2);
// })