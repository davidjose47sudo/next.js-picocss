import { decode } from "code-module64";

// mock the user api
export default async function verify(token: string) {
  // sleep 500
  await new Promise(res => setTimeout(res, 500));

  async function parsedata(data: string) {
    const datauser = await JSON.parse(data)
    return {
      username: datauser.username,
      rol: datauser.rol
    };
  }

  if (document.cookie.includes(`swr-session-token=${token}`)) {
    // authorized
    const userdata = decode({
      key: "env.aquiva",
      text: token
    })
    userdata.then((data) => {
      return parsedata(data.information.information)
    })
    userdata.catch(e => { return e })
  }

  // not authorized
  const error = new Error("Not authorized!");
  error.message = "loging again"
  throw error;
}

