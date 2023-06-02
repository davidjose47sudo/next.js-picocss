"use client"
import Image from "next/image";
import styles from "../../styles/global/nav.module.css"
import Link from "next/link";
import { decode } from "code-module64";
import { useEffect, useState } from "react";

export default function Nav({ children, }: { children: React.ReactNode }) {

    const [username, setusername] = useState("admin")
    const [rol, setRol] = useState("admin")
    let user = {
        username: "admin",
        rol: "admin"
    }
    async function parsedata(data: string) {
        const datauser = await JSON.parse(data)
        console.log(datauser)
        setRol(datauser.rol)
        setusername(datauser.username)
    }
    useEffect(() => {
        const data = localStorage.getItem('datauser')
        if (typeof (data) === "string") {
            const desencript = decode({ text: data, key: 'env.aquiva' })
            desencript.then(data => {

                console.log(data.information)
                console.log(data.information.information)
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
                            <li><Link href={`/${username}/${rol}/home`}>Home</Link></li>
                            <li><Link href={`/${username}/${rol}/notes`}>notes</Link></li>
                            <li><Link href={`/${username}/${rol}/session`}>Session</Link></li>
                            <li><Link href="/">Logout</Link></li>
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