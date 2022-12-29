import styles from './SignUp.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '~/app/redux/actions/action';
import { authSelector } from '~/app/redux/selectors/authSelector';


function SignUp() {
    const [user, setUser] = useState()
    const userSelector = useSelector(state => state.auth)

    const emailRef =  useRef()
    const usernameRef =  useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch() 

    // const register = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:5000/api/auth/register', {
    //         email: emailRef.current.value,
    //         username: usernameRef.current.value,
    //         password: passwordRef.current.value
    //     })
    // }

    async function signIn (e) {
        e.preventDefault()
        try {
            const users = await axios.post(`https://netflix-api-fc1y.onrender.com/api/auth/login`, {
                email: emailRef.current.value,
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
            console.log(users.data.success)
            
            dispatch(login(users.data))

        } catch (err) {
            console.log(err)
        }
        
    }

    useEffect(() => {

        console.log(userSelector)
    }, [userSelector])

    return (
        <div className={clsx(styles.signupScreen)}>
            <form>
                <h1>Sign In</h1>
                <label for="email">Email</label>
                <input ref={emailRef} placeholder="Email" type="email" name='email' id='email' />
                <label for="username">Ten</label>
                <input ref={usernameRef} placeholder="Username" type="text" name='username' id='username'/>
                <label for="password">Mat Khau</label>
                <input ref={passwordRef} placeholder="Password" type="password" name='password' id='password'/>
                <button onClick={signIn}>Sign In</button>
                <h4>
                    <span className={clsx(styles.signupScreen__gray)}>New to Netflix</span>
                    <span> </span>
                    <span className={clsx(styles.signupScreen__link)}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}

export default SignUp;
