import { login, reset } from '../features/auth/auth.slice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";

import { FaSignInAlt } from 'react-icons/fa'
import Spinner from './Spinner'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: '', password: '' })

  const { email, password } = formData;
  const { user, isError, isLoading, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) toast.error(message)
    if (isSuccess || user) navigate('/');
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  }

  return (
    isLoading ? <Spinner /> : (
      <>
        <section className='heading'>
          <h1><FaSignInAlt /> Login</h1>
          <p>Login and start creating tasks</p>
        </section>
        <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={email}
                onChange={onChange}
                placeholder='Enter your email'
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                value={password}
                onChange={onChange}
                placeholder='Enter your password'
              />
            </div>

            <div className='form-group'>
              <button type="submit" className='btn btn-block'>Submit</button>
            </div>
          </form>
        </section>
      </>
    )
  )
}

export default Login;
