import loginToken from "@/app/API/logout/token";
import { login } from "@/libs/auth/userauth";
import logintypes from "@/types/login_type";
import { encode } from "code-module64";

export default async function handlelogin(credentiales: logintypes) {
    const url = '/API/login'; // Ruta de la API de Next.js para el inicio de sesión
    const { credencial, password } = credentiales
    const data = {
        identifier: credencial, // Nombre de usuario o email
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

        console.log(response)
        if (!response.ok) {
            const error = await response.json();
            console.log('Error:', error.message);
            return { message: error.message };
            // Realizar acciones adicionales en caso de error en el inicio de sesión
        }

        // Realizar acciones adicionales después del inicio de sesión exitoso
        const { username, rol } = await response.json();
        console.log('Nombre de usuario:', username);
        console.log('Rol:', rol);
        if (!username) {
            return { message: 'Credenciales inválidas' };
        }
        const token = {
            token: loginToken({
                username: username,
                password: password
            }),
            rol: rol
        }
        const user = encode(
            {
                secret: 'env.aquiva',
                data: {
                    information: JSON.stringify({ username: username, rol: rol })
                }
            }
        )
        user.then((encript: { message: string; }) => {
            user.catch((error: any) => {
                return ({ message: 'Error en el servidor' });
            })
            token.token.then(auth => {
                login(encript.message, auth);
                return ({ message: 'ok', rol: rol });
            }).catch(e => { return e })
        })
        user.catch(e => { return ({ message: 'Error en el servidor' }) })

    } catch (error) {
        console.error('Error en la solicitud:', error);
        // Realizar acciones adicionales en caso de error en la solicitud
        return { message: error };
    }
};