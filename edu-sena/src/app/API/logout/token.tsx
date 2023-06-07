'use server'
import * as jose from "jose"


export default async function loginToken(data: object) {
    const secret = new TextEncoder().encode(
        'env.secret',
    )
    const alg = 'HS256'
    const jwt = await new jose.SignJWT({ data })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('8h')
        .sign(secret)
    return jwt
}

