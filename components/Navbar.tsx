import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
    const session = {};
    return (
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image src="/next.svg" width={115} height={43} alt="Logo" />
                </Link>
            </div>
            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        UserPhoto
                        <Link href="/cart">
                            Cart
                        </Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
    );
}
 
export default Navbar;