'use server'
import loginToken from "./token";
import postgress from "pg"
import dataConection from "@/helpers/conection";


export default async function LoginDB(data: { username: string, password: string }) {
    const { username, password } = data;
    let pool = new postgress.Pool(dataConection)
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM public."Users" where "Username"= '${username}' and "Password"='${password}' ;`)
    if (result.rowCount) {
        return {
            token: loginToken(data),
            rol: "estudent"
        }
    }
    return false
}