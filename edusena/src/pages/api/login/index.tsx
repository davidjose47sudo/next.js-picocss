import { Pool } from 'pg'
import dataConection from "@/helpers/conection";



export default async function hendleLogin(req: any, res: any) {

    if (req.method !== "POST") return res.status(404).json({ message: "Not found" });
    const { credencial, password }: { credencial: string, password: string } = req.body;// Obtén los datos de inicio de sesión del cuerpo de la solicitud

    let pool = new Pool(dataConection)
    const client = await pool.connect();
    try {
        // Ejecuta el procedimiento almacenado en PostgreSQL
        const result = await client.query(`SELECT nameuser,job FROM public.obtener_usuario('${credencial}', '${password}')`);
        // Obtiene el valor de la variable de salida 'out_username'
        const username: string = result.rows[0].nameuser;
        const rol: string = result.rows[0].job;
        if (username) {
            return res.status(200).json({
                message: {
                    username: username,
                    rol: rol
                }
            })
        } else {
            return res.status(200).json({ message: { error: "Credenciales inválidas" } })
        }
    } catch (error) {
        console.error('Error en la ejecución del procedimiento:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }


}






