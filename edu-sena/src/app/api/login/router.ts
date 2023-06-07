'use server'
import postgress from "pg"
import dataConection from "@/helpers/conection";



export default async function hendleLogin(req: any, res: any) {
    console.log(req)
    if (req.method === "GET") return res.status(200).json({ message: "APILOGIN" });
    if (req.method !== "POST") return res.status(404).json({ message: "Not found" });
    const { credential, password }: { credential: string, password: string } = req.body;// Obtén los datos de inicio de sesión del cuerpo de la solicitud

    let pool = new postgress.Pool(dataConection)
    const client = await pool.connect();
    try {
        // Ejecuta el procedimiento almacenado en PostgreSQL
        await client.query('CALL login_usuario($1, $2, $3)', [credential, password, 'out_username']);
        // Obtiene el valor de la variable de salida 'out_username'
        const result = await client.query('SELECT $1 AS username', ['out_username']);
        const username: string = result.rows[0].username;
        const rol: string = result.rows[0].rol;
        if (username) {
            return res.status(200).json({
                username: username,
                rol: rol
            })
        } else {
            return res.status(200).json({
                username: "",
                rol: ""
            })
        }
    } catch (error) {
        console.error('Error en la ejecución del procedimiento:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }


}






