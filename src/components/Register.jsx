import { register, reset } from '../features/auth/auth.slice'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { FaUser } from "react-icons/fa";
import Spinner from './Spinner';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  useEffect(() => {
    if(isError) toast.error(message);
    if(isSuccess || user) navigate('/');
    dispatch(reset());
  }, [user, dispatch, isError, isSuccess, message, navigate])

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords are different')
    } else {
      const userData = { name, email, password }
      dispatch(register(userData))
    }
  }

  return (
    isLoading ? <Spinner /> : (
      <>
        <section className='heading'>
          <h1><FaUser /> Register</h1>
          <p>Please create an account</p>
        </section>
        <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                value={name}
                onChange={onChange}
                placeholder='Enter your name'
              />
            </div>
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
              <input
                type='password'
                className='form-control'
                id='confirmPassword'
                name='confirmPassword'
                value={confirmPassword}
                onChange={onChange}
                placeholder='Confirm password'
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

export default Register;
