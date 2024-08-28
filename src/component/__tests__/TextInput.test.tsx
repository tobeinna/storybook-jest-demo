import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from '../TextInput/TextInput';

describe('TextInput component', () => {
    test('snapshot test for normal text input', () => {
        const tree = render(<TextInput onChange={() => { }} />).container;
        expect(tree).toMatchSnapshot();
    });

    test('snapshot test for disabled text input', () => {
        const tree = render(<TextInput disabled onChange={() => { }} />).container;
        expect(tree).toMatchSnapshot();
    });

    test('renders with correct value', () => {
        render(<TextInput value="Value" onChange={() => { }} />);
        const element = screen.getByDisplayValue(/Value/i);
        expect(element).toBeInTheDocument();
    });

    test('call onChange when value changes', () => {
        const handleChange = jest.fn();
        render(<TextInput value="Initial" onChange={handleChange} />);
        const element = screen.getByDisplayValue(/Initial/i);

        fireEvent.change(element, { target: { value: 'Changed' } });

        expect(handleChange).toHaveBeenCalledWith('Changed');
    });

    test('not call onChange when disabled', () => {
        const handleChange = jest.fn();
        render(<TextInput value="Initial" disabled onChange={handleChange} />);
        const element = screen.getByDisplayValue(/Initial/i);

        fireEvent.change(element, { target: { value: 'Changed' } });

        expect(handleChange).not.toHaveBeenCalled();
    });
});
