import Links from './Links/Links';
import styles from './navbar.module.css'

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>logo</div>
            <div>
                <Links/>
            </div>
        </div>
    );
}

export default Navbar;
