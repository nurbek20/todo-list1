import React from 'react'

const RegisterPage = () => {
  return (
    <div className='container'>
      <div className='auth-page'>
        <h3>Регистрация</h3>
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
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage