import Nav from "@/componets/global/nav";
import useUser from "@/context/use_user";
import Image from "next/image";
import Loading from "./global/loading";


export default function Session() {
    
    if (true) {
        return (
            <Nav>
                <div className="profile-container">
                    <Image style={{ borderRadius: "50%" }} className="profile-image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width={100} height={100} alt="Profile Picture" />
                    <div className="profile-info">
                        <h1>nombre</h1>
                        <p>Correo Electrónico: usuario@example.com</p>
                        <p>Ubicación: Ciudad, País</p>
                        <p>Ocupación: Desarrollador Web</p>

                    </div>
                </div>
            </Nav>
        )
    } else {
        return (<Loading />)
    }
}