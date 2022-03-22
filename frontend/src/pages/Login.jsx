import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    // Allows user to input into form
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return <>
        <section className='heading'>
            <h1>
                <FaSignInAlt /> Dashboard Log In
            </h1>
            <p>Access your account</p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type='email'
                        className='form-control'
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Enter your email'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type='password'
                        className='form-control'
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Enter your password'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Log In</button>
                </div>
            </form>
        </section>
    </>
}

export default Login