import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="center-container">
      <h1>Регистрация</h1>
      <form>
        <label htmlFor="email">E-Mail:</label>
        <input type="text" className="input-text mb20" />

        <label htmlFor="password">Пароль:</label>
        <input type="password" className="input-text mb20" />

        <label htmlFor="password">Повторите пароль:</label>
        <input type="password" className="input-text mb20" />

        <div className="center-container__bottom-controls">
          <input type="submit" value="Зарегистрироваться" className="btn btn_colored btn_active" />
          <span>
            или <Link to="/signin">Войти</Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export { RegisterPage }
