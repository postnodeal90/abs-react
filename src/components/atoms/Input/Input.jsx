import './Input.css';

export default function Input({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  disabled = false,
  error = false
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      disabled={disabled}
      className={`input ${error ? 'input--error' : ''}`}
    />
  );
}
