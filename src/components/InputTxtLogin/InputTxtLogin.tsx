import './InputTxtLogin.css';

type InputTxtLoginProps = {
  label: string;
  placeholder: string;
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color';
  value: string;
  onChange: (value: string) => void;
  id?: string;
  autoComplete?: string;
};

function InputTxtLogin({
  label,
  placeholder,
  type,
  value,
  onChange,
  id,
  autoComplete,
}: InputTxtLoginProps) {
  const inputId = id ?? `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="input-txt">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default InputTxtLogin;
