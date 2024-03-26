'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, children }) {
    const pathName = usePathname();
    const active = pathName === path;
    const linkClassName = active ? "hover:border-b border-black block h-6 box-border mt-4 border-b border-black" : "hover:border-b border-black block h-6 box-border mt-4";


    return (
        <Link className={linkClassName} href={path}>{children}</Link>
    );
}