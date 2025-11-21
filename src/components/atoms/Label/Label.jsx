import './Label.css';

export default function Label({ children, htmlFor, required = false }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
      {required && <span className="label__required">*</span>}
    </label>
  );
}
