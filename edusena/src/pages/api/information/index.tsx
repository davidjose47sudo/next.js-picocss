import { Pool } from 'pg'
import dataConection from "@/helpers/conection";



export default async function hendleLogin(req: any, res: any) {

    if (req.method !== "GET") return res.status(404).json({ message: "Not found" });
    const keyusername: string = req.query.email;// Obtén los datos de inicio de sesión del cuerpo de la solicitud
    console.log(req.query.email)
    let pool = new Pool(dataConection)
    const client = await pool.connect();
    try {
        // Ejecuta el procedimiento almacenado en PostgreSQL
        const result = await client.query(`select nameuser , job , correo  , nombre1  , apellido1 , nacimiento, hogar from  public.obtener_informacion('${keyusername}')`);
        // Obtiene el valor de la variable de salida 'out_username'
        const username: string = result.rows[0].nameuser;
        const rol: string = result.rows[0].job;
        const email: string = result.rows[0].correo;
        const nombre: string = result.rows[0].nombre1;
        const apellido: string = result.rows[0].apellido1;
        const fechanecimiento: string = result.rows[0].nacimiento;
        const direccion: string = result.rows[0].hogar;

        if (username) {
            return res.status(200).json({
                message: {
                    username: username,
                    rol: rol,
                    email: email,
                    nombre: nombre,
                    apellido: apellido,
                    fechanecimiento: fechanecimiento,
                    direccion: direccion
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






