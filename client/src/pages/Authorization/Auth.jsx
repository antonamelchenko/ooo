import React, { useEffect, useContext } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'

import './Auth.css'

toast.configure()

const Auth = ({ body }) => {
  const auth = useContext(AuthContext)
  const { loading, request, error, clearError } = useHttp()

  const validationsSchema = yup.object().shape({
    email: yup
      .string()
      .email('Введите верный email')
      .required('Обязательно для заполнения'),
  })

  const notify = (mes) => {
    toast.success(mes)
  }

  useEffect(() => {
    const notify = (error) => {
      toast.error(error)
    }
    notify(error)
    clearError()
  }, [error]) // BE CAREFULLY I am removed dependency - clearError, it can be bad move, I don't know it yet

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      validateOnBlur
      onSubmit={async (obj) => {
        try {
          const data = await request('/api/auth/login', 'POST', { ...obj })
          notify(`Вход в систему выполнен успешно. Здравствуйте ${body.login}`)
          auth.login(data.token, data.userId)
        } catch (e) {}
      }}
      validationSchema={validationsSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <div className='row auth'>
          <h3 className='auth__header'>Авторизация</h3>
          <div className='card'>
            <form onSubmit={handleSubmit}>
              <div className='card-content white-text'>
                <span className='card-title head'>Sign in</span>

                <div className='input-field'>
                  <input
                    placeholder='Введите email'
                    id='email'
                    type='email'
                    className='validate'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <label htmlFor='email'>Email</label>
                  {touched.email && errors.email && (
                    <p className='errorValidation'>{errors.email}</p>
                  )}
                </div>

                <div className='input-field'>
                  <input
                    placeholder='Введите пароль'
                    id='password'
                    type='password'
                    className='validate'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <label htmlFor='email'>Password</label>
                </div>
              </div>
              <div className='card-action'>
                <button
                  className='btn sign-in'
                  onClick={handleSubmit}
                  type={'submit'}
                  disabled={loading && !isValid && !dirty}
                >
                  Войти
                </button>

                <NavLink className='navLink' to='/signUp'>
                  Регистрация
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default Auth

// light-blue lighten-2
