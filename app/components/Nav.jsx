import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
            <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
                <div className="flex items-center gap-2">
                    <Image
                        className="lg:hidden w-5 h-5"
                        src="/menu.svg"
                        alt="Logo"
                        width={20}
                        height={20}
                    />
                    <Link href="/">
                        <Image
                            className="h-10"
                            src="/lws-logo-black.svg"
                            alt="Logo"
                            width={120}
                            height={140}
                        />
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
                <Image
                    className="hidden lg:block w-[18px] h-[18px]"
                    src="/avatar.svg"
                    alt="login acount avatar"
                    width={18}
                    height={18}
                />
                <Image
                    className="block w-5 h-5"
                    src="/shopping-Cart.svg"
                    alt="shopping cart icon"
                    width={20}
                    height={20}
                />
            </div>
        </nav>
    );
}