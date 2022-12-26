import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

function Nav() {

    const [show, handleShow] = useState(false)

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
            console.log(show)
        } else {
            handleShow(false)
        }
    } 

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)

        return () => {
            window.removeEventListener('scroll', transitionNavBar)
        }
    }, [])

    return (
        <div className={clsx(styles.nav, show && styles.nav__black)}>
            <div className={clsx(styles.nav__contents)}>
                <Link>
                    <img
                        className={clsx(styles.nav__logo)}
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt=""
                    />
                </Link>

                <Link to="/profile">
                    <img
                        className={clsx(styles.nav__avatar)}
                        src="https://www.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg"
                        alt=""
                    />
                </Link>
            </div>
        </div>
    );
}

export default Nav;
