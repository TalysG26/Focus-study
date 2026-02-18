import './PasswordInput.css'

export default function PasswordInput({ value, onChange, placeholder = 'Senha' }) {
  return (
    <div className="password-input">
      <input
        className="password-input__field"
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="current-password"
      />
    </div>
  )
}
