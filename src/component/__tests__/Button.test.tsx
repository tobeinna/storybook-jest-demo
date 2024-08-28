import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button/Button';

describe('Button component', () => {
    test('snapshot test for primary button', () => {
        const tree = render(<Button text="Primary Button" type="primary" />).container;
        expect(tree).toMatchSnapshot();
    });

    test('snapshot test for secondary button', () => {
        const tree = render(<Button text="Secondary Button" type="secondary" />).container;
        expect(tree).toMatchSnapshot();
    });

    test('snapshot test for danger button', () => {
        const tree = render(<Button text="Danger Button" type="danger" />).container;
        expect(tree).toMatchSnapshot();
    });

    test('snapshot test for disabled button', () => {
        const tree = render(<Button text="Disabled Button" type="primary" disabled />).container;
        expect(tree).toMatchSnapshot();
    });

    test('render with correct text', () => {
        render(<Button text="Button" type="primary" />);
        const element = screen.getByText(/Button/i);
        expect(element).toBeInTheDocument();
    });

    test('check the class when rerender by changing type', () => {
        const { rerender } = render(<Button text="Primary Button" type="primary" />);
        const element = screen.getByText(/Primary Button/i);
        expect(element).toHaveClass('primary');

        rerender(<Button text="Danger Button" type="danger" />);
        expect(element).toHaveClass('danger');
    });

    test('disable the button when disabled prop is true', () => {
        render(<Button text="Button" type="primary" disabled />);
        const element = screen.getByText(/Button/i);
        expect(element).toBeDisabled();
    });

    test('call onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button text="Button" type="primary" onClick={handleClick} />);
        const element = screen.getByText(/Button/i);
        fireEvent.click(element);
        expect(handleClick).toHaveBeenCalled();
    });

    test('not call onClick when button is disabled', () => {
        const handleClick = jest.fn();
        render(<Button text="Button" type="primary" disabled onClick={handleClick} />);
        const element = screen.getByText(/Button/i);
        fireEvent.click(element);
        expect(handleClick).not.toHaveBeenCalled();
    });
});
