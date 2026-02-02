// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KeccakCraft title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KeccakCraft/i);
    expect(titleElement).toBeInTheDocument();
});
