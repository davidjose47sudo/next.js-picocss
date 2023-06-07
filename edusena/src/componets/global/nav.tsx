"use client"
import Image from "next/image";
import styles from "../../styles/global/nav.module.css"
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { MdAccountCircle, MdHome, MdLibraryBooks, MdOutlineLogout } from "react-icons/md";
import { logout } from "@/libs/auth/userauth";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import useUser from "@/context/use_user";

export default function Nav({ children, }: { children: React.ReactNode }) {

    const [username, setusername] = useState(" ")
    const [rol, setRol] = useState("")
    const router = useRouter();

    const { user, loading, loggedOut } = useUser(username);

    useEffect(() => {
        const username1 = localStorage.getItem("username")
        if (username1) {
            setusername(username1)
        }
    }, [])

    function out() {
        logout();
        router.push('/')
    }


    if (loading) {
        return (<Loading />)
    }

    return (
        <main className={styles.container_main}>
            <Suspense fallback={<Loading />}>
                <div className={styles.container_nav}>
                    <aside>
                        <article className={styles.container_img}>
                            <Image src={'/logosena.png'} alt="sena icono" height={100} width={100} />
                        </article>
                        <nav>
                            <ul>
                                <li><Link className={styles.Link} href={`/${user.message.username}/${user.message.rol}/home`}><span><MdHome size={30} /><p className={styles.navp}>Home</p></span></Link></li>
                                <li><Link className={styles.Link} href={`/${user.message.username}/${user.message.rol}/notes`}><span><MdLibraryBooks size={30} /><p className={styles.navp}>notes</p></span></Link></li>
                                <li><Link className={styles.Link} href={`/${user.message.username}/${user.message.rol}/session`}><span><MdAccountCircle size={30} /><p className={styles.navp}>Session</p></span></Link></li>
                                <li><a onClick={out} className={styles.Link}><span><MdOutlineLogout size={30} /><span className={styles.navp}>Logout</span></span></a></li>
                            </ul>
                        </nav>
                    </aside>
                </div>
                <div className={styles.children_main}>
                    {children}
                </div>
            </Suspense>
        </main>
    )


}