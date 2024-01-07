import Link from "next/link";
import styles from './Links.module.css'
function Links() {
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog",
        },
        {
            id: 4,
            title: "About",
            url: "/about",
        },
        {
            id: 5,
            title: "Contact",
            url: "/contact",
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard",
        },
    ];
    return (
        <div className={styles.logo}>
            {links.map((link) => (
                <Link href={link.url} key={link.title}>
                    {link.title}
                </Link>
            ))}
        </div>
    );
}

export default Links;
