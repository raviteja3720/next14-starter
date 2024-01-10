"use client";

import { useState } from "react";
import styles from "./Links.module.css";
import NavLink from "./navLinks/NavLink";

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

function Links() {
    const session = true;
    const isAdmin = true;

    const [open, isOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink item={{ title: "Admin", url: "/admin" }} />
                        )}
                        <button className={styles.logout}>logout</button>
                    </>
                ) : (
                    <NavLink item={{ title: "login", url: "/login" }} />
                )}
            </div>
        </div>
    );
}

export default Links;
