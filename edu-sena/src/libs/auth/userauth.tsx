// mock login and logout
export function login(token: string, tokenauth: string | Error) {
    if (typeof(tokenauth)=== "string") {
        // add cookie
        document.cookie = `swr-session-token=${token};`;
        document.cookie = `swr-session-tokenauth=${tokenauth};`;
    }
}
export function logout() {
    // delete cookie
    document.cookie = "swr-session-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "swr-session-tokenauth=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
