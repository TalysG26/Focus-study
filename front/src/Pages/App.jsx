
import './css/App.css'
import { useState } from 'react'
import EmailInput from '../componentes/EmailInput/EmailInput'
import PasswordInput from '../componentes/PasswordInput/PasswordInput'
import logoImg from '../../imgs/logo.jpeg'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [mode, setMode] = useState('login') // 'login' | 'signup'

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logoImg} alt="logo" className="login-card__logo" />
        <div className="login-card__tabs">
          <button
            className={`tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => setMode('login')}
          >
            Entrar
          </button>
          <button
            className={`tab ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => setMode('signup')}
          >
            Criar conta
          </button>
        </div>

        {mode === 'login' ? (
          <>
            <h2 className="login-card__title">Entrar</h2>
            <div className="login-card__fields">
              <EmailInput value={email} onChange={e => setEmail(e.target.value)} />
              <PasswordInput value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="login-card__btn">Entrar</button>
          </>
        ) : (
          <>
            <h2 className="login-card__title">Criar usuário</h2>
            <div className="login-card__fields">
              <input
                className="simple-field"
                type="text"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <EmailInput value={email} onChange={e => setEmail(e.target.value)} placeholder={'Email'} />
              <PasswordInput value={password} onChange={e => setPassword(e.target.value)} placeholder={'Senha'} />
            </div>
            <button className="login-card__btn">Criar conta</button>
          </>
        )}
      </div>
    </div>
  )
}

export default App
