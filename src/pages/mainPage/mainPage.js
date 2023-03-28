import React from 'react'

const MainPage = () => {
  return (
    <div className='container'>
      <div className='main-page'>
        <h4>Дабавить задачу</h4>
        <form className='form form-login'>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                type="text"
                name="input"
                id="text"
                className='validate' />
              <label htmlFor='input'>Задача:</label>
            </div>
          </div>
          <div className='row'>
            <button
              className='waves-effect waves-light btn blue'
              type='submit'>
              Дабавить
            </button>
          </div>
        </form>
        <h3>Активные Задачи:</h3>
        <div className='todos'>
          <div className='row flex todos-item'>
            <div className='col todos-num' >1</div>
            <div className='col todo-text'>Create Todo</div>
            <div className='col todos-buttons'>
              <i className='material-icons blue-text'>check</i>
              <i className='material-icons orange-text'>warning</i>
              <i className='material-icons red-text'>delete</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage