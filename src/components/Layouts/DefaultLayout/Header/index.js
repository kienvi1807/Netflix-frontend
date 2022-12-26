
import clsx from 'clsx';
import Banner from '~/components/children/Banner';
import Nav from '~/components/children/Nav';
import styles from './Header.module.scss'

function Header() {
    return (
        <div className={clsx(styles.header)}>
            <Nav />

            <Banner />
        </div>
    )
}

export default Header;
