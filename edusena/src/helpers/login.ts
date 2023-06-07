
import { login } from "@/libs/auth/userauth";
import loginToken from "@/helpers/token";
import logintypes from "@/types/login_type";
import { encode } from "code-module64";

export default async function handlelogin(credentiales: logintypes) {
    const url = '/api/login'; // Ruta de la API de Next.js para el inicio de sesión
    const { credencial, password } = credentiales
    const data = {
        credencial: credencial, // Nombre de usuario o email
        password: password // Contraseña
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.status) {
            const error = await response.json();
            return { message: error.message };
            // Realizar acciones adicionales en caso de error en el inicio de sesión
        }


        // Realizar acciones adicionales después del inicio de sesión exitoso
        const responseData = await response.json();
        const usernamedb = responseData.message?.username || "Credenciales inválidas";
        const roldb = responseData.message?.rol;
    
        if (usernamedb === "Credenciales inválidas") {
            return ({ message: 'Credenciales inválidas' });
        }
        const token = {
            token: loginToken({
                username: usernamedb,
                password: password
            }),
            rol: roldb
        }
        const user = encode(
            {
                secret: 'env.aquiva',
                data: {
                    information: JSON.stringify({ username: usernamedb, rol: roldb })
                }
            }
        )
        user.then((encript: { message: string; }) => {
            token.token.then(auth => {
                login(encript.message, auth);
                localStorage.setItem("username", usernamedb)
                return ({ message: 'ok', rol: roldb });
            })
            token.token.catch(e => { return { message: 'Error en el servidor al general el token' ,rol: roldb } })
        })

        user.catch(e => { return ({ message: 'Error en el servidor',rol: roldb }) })
        return ({ message: 'Error en el servidor',rol: roldb })
    } catch (error) {
        console.error('Error en la solicitud:', error);
        // Realizar acciones adicionales en caso de error en la solicitud
        return { message: error  };
    }
};