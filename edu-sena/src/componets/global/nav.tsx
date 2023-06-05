"use client"
import Image from "next/image";
import styles from "../../styles/global/nav.module.css"
import Link from "next/link";
import { decode } from "code-module64";
import { useEffect, useState } from "react";
import { MdAccountCircle, MdHome, MdLibraryBooks, MdOutlineLogout } from "react-icons/md";
import { logout } from "@/libs/auth/userauth";
import { useRouter } from "next/navigation";

export default function Nav({ children, }: { children: React.ReactNode }) {

    const [username, setusername] = useState("admin")
    const [rol, setRol] = useState("admin")
    const router = useRouter();

    async function parsedata(data: string) {
        console.log(data)
        const datauser = await JSON.parse(data)
        setRol(datauser.rol)
        setusername(datauser.username)
    }
    function out() {
        logout();
        router.push('/')
    }
    useEffect(() => {
        const data = localStorage.getItem('datauser')
        if (typeof (data) === "string") {
            const desencript = decode({ text: data, key: 'env.aquiva' })
            desencript.then(data => {
                parsedata(data.information.information)
            })
            desencript.catch(e => alert("error"))
        }
    }, [])
    return (
        <main className={styles.container_main}>
            <div className={styles.container_nav}>
                <aside>
                    <article className={styles.container_img}>
                        <Image src={'/logosena.png'} alt="sena icono" height={100} width={100} />
                    </article>
                    <nav>
                        <ul>
                            <li><Link className={styles.Link} href={`/${username}/${rol}/home`}><span><MdHome size={30} /><p className={styles.navp}>Home</p></span></Link></li>
                            <li><Link className={styles.Link} href={`/${username}/${rol}/notes`}><span><MdLibraryBooks size={30} /><p className={styles.navp}>notes</p></span></Link></li>
                            <li><Link className={styles.Link} href={`/${username}/${rol}/session`}><span><MdAccountCircle size={30} /><p className={styles.navp}>Session</p></span></Link></li>
                            <li><a onClick={out} className={styles.Link}><span><MdOutlineLogout size={30} /><span className={styles.navp}>Logout</span></span></a></li>
                        </ul>
                    </nav>
                </aside>
            </div>
            <div className={styles.children_main}>
                {children}
            </div>
        </main>
    )
}