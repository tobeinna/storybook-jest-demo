import './text-input.scss'

interface TextInputProps {
    value?: string,
    disabled?: boolean,
    onChange: React.Dispatch<React.SetStateAction<string>>
}

function TextInput({ value = '', disabled = false, onChange }: TextInputProps) {
    return <input type="text" value={value} disabled={disabled} onChange={e => onChange(e.target.value)} />;
}

export default TextInput;