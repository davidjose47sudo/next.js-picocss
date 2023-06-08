import * as jose from "jose"

export default async function loginToken(data: object) {
    const encoder = new TextEncoder();
    const secret = encoder.encode('env.secret');
    console.log(secret)
    const alg = 'HS256'
    const jwt = await new jose.SignJWT({ data })
        .setProtectedHeader({ alg })
        .setExpirationTime('8h')
        .sign(secret) //error en la version mobil por incompativilidad , el formato es Uint8Array o ArrayBuffer se necesita alli
    return jwt
}

