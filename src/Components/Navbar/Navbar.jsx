import Link from "next/link";
import Links from "./Links";
import styles from './navbar.module.css'

function Navbar() {
    return (
        <div className={styles.container}>
            <div>logo</div>
            <div>
                <Links />
            </div>
        </div>
    );
}

export default Navbar;
