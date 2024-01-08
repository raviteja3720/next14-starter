import Link from "next/link";
import styles from "./Links.module.css";
import NavLink from "./navLinks/NavLink";
function Links() {
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        // {
        //     id: 2,
        //     title: "Portfolio",
        //     url: "/portfolio",
        // },
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
        // {
        //     id: 6,
        //     title: "Dashboard",
        //     url: "/dashboard",
        // },
    ];
    return (
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
        </div>
    );
}

export default Links;
