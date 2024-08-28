import './button.scss';

interface ButtonProps {
    text?: string,
    type: 'primary' | 'secondary' | 'danger',
    disabled?: boolean,
    onClick?: () => void,
}

function Button({ text, type = 'primary', disabled = false, onClick }: ButtonProps) {
    return <button className={type} disabled={disabled} onClick={onClick}>
        <span>{text}</span>
    </button>;
}

export default Button;