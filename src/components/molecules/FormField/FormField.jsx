import Label from '@atoms/Label';
import Input from '@atoms/Input';
import Text from '@atoms/Text';
import './FormField.css';

export default function FormField({ 
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  placeholder
}) {
  return (
    <div className="form-field">
      {label && (
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
      )}
      <Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={!!error}
      />
      {error && (
        <Text variant="small" color="danger">
          {error}
        </Text>
      )}
    </div>
  );
}
