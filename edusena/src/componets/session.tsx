import Nav from "@/componets/global/nav";
import useUser from "@/context/use_user";
import Image from "next/image";
import Loading from "./global/loading";
import { useEffect, useState } from "react";


export default function Session() {

    const [username, setusername] = useState(" ")
    useEffect(() => {
        const username1 = localStorage.getItem("username")
        if (username1) {
            setusername(username1)
        }
    }, [])

    const { user, loading, loggedOut } = useUser(username);

    if (loading) {
        return <Loading />
    }

    if (true) {
        return (
            <Nav>
                <div className="profile-container">
                    <Image style={{ borderRadius: "50%" }} className="profile-image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width={100} height={100} alt="Profile Picture" />
                    <div className="profile-info">
                        <h1>{user.message.username}</h1>
                        <p>Nombre: {user.message.nombre}</p>
                        <p>Apellido: {user.message.apellido}</p>
                        <p>Correo Electrónico: {user.message.email}</p>
                        <p>Direccion: {user.message.direccion}</p>
                        <p>Ocupación: {user.message.rol}</p>
                        <p>fecha de nacimiento: {user.message.fechanecimiento}</p>

                    </div>
                </div>
            </Nav>
        )
    } else {
        return (<Loading />)
    }
}