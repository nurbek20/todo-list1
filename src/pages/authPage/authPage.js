import React from 'react'

const AuthPage = () => {
  return (
    <div className='container'>
    <div className='auth-page'>
      <h3>Авторизация</h3>
      <form className='form form-login'>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type="email"
              name='email'
              className='validate'
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='input-field col s12'>
            <input
              type="password"
              name='password'
              className='validate'
            />
            <label htmlFor='password'>Password</label>
          </div>
          <div className='row'>
            <button 
            type='submit' 
            className='waves-effect waves-light btn blue'>
             Войти
            </button>
            <span className='btn-outline btn-reg'>
              Нет аккаунт ?
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AuthPage