import { useState } from 'react'
import './css/Signup.css'
import EmailInput from '../componentes/EmailInput/EmailInput'
import PasswordInput from '../componentes/PasswordInput/PasswordInput'
import logoImg from '../../imgs/logo.jpeg'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="signup-page">
        <div className="signup-card">
          <img src={logoImg} alt="logo" className="signup-card__logo" />
            <h2 className="signup-card__title">Criar usuário</h2>
            <div className="signup-card__fields">
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
            <button className="signup-card__btn">Criar conta</button>
        </div>
    </div>
  )
}
