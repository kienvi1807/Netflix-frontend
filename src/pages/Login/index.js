import styles from './Login.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import SignUp from '../SignUp';

function Login() {

    const [signIn, setSignIn] = useState(false)

    return (
        <div className={clsx(styles.loginScreen)}>
            <div className={clsx(styles.loginScreen__background)}>
                <img
                    className={clsx(styles.loginScreen__logo)}
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <button className={clsx(styles.loginScreen__button)} onClick={() => setSignIn(true)}>Sign in</button>
                <div className={clsx(styles.loginScreen__gradient)}></div>
            </div>

            <div className={clsx(styles.loginScreen__body)}>
                {signIn ? (
                    <SignUp />
                ) : (
                    <>
                        <h1>Unlimited files, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className={clsx(styles.loginScreen__input)}>
                            <form>
                                <input type='email' placeholder='Email Adress' />
                                <button className={clsx(styles.loginScreen__getStarted)} onClick={() => setSignIn(true)}>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;
