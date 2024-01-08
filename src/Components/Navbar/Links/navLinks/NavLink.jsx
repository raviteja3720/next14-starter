"use client";

import Link from "next/link";
import styles from "./Navlink.module.css";
import { usePathname } from "next/navigation";

function NavLink({ item }) {
    const pathname = usePathname();
    return (
        <div>
            <Link
                href={item.url}
                className={`${styles.container}
                ${pathname === item.url && styles.active}`}
            >
                {item.title}
            </Link>
        </div>
    );
}

export default NavLink;
