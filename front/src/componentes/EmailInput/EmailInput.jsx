import './EmailInput.css'

export default function EmailInput({ value, onChange, placeholder = 'Email' }) {
  return (
    <div className="email-input">
      <input
        className="email-input__field"
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="username"
      />
    </div>
  )
}
