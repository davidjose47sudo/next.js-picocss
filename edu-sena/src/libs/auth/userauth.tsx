// mock login and logout
export function login(token: string) {
    // add cookie
    document.cookie = `swr-session-token=${token};`;
}
export function logout() {
    // delete cookie
    document.cookie = "swr-session-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
