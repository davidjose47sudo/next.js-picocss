'use client'; // ahora hay que indicar si el componenete lo renderizara el usuario o el servidor
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "../styles/page.module.css";
import { encode } from "code-module64";
import Image from "next/image";
import { login } from "@/libs/auth/userauth";
import LoginDB from "./API/login/loginDB";


export default function Home() {
  const route = useRouter();
  const [username, setUsername]: any = useState("username");
  const [password, setPassword]: any = useState("password");
  const [sendstatus, setstatusSend]: any = useState(false);

  function validation(e: FormEvent<HTMLFormElement>) {
    setstatusSend(true)
    e.preventDefault()
    const response = LoginDB({ username: username, password: password })
    response.then((elemet) => {
      if (typeof (elemet) === "object") {
        const token = elemet.token
        token.then(token => {
          if (token) {
            const user = encode(
              {
                secret: 'env.aquiva',
                data: {
                  information: JSON.stringify({ username: username, rol: elemet.rol })
                }
              }
            )
            user.then((encript: { message: string; }) => {
              login(encript.message, token);
              setTimeout(() => {
                if (elemet.rol === "estudent") {
                  setstatusSend(false)
                  return route.push(`/${username}/estudent/home`)
                }
                if (elemet.rol === "teacher") {
                  setstatusSend(false)
                  return route.push(`/${username}/teacher/home`)
                }
                if (elemet.rol === "admin") {
                  setstatusSend(false)
                  return route.push(`/${username}/admin/home`)
                }
                return alert("Error De Rol")
              }, 1000);
            })
            user.catch((error: any) => {
              setstatusSend(false)
              alert("intente de nuevo")
            })
          }
        })
      } else {
        setstatusSend(false)
        return alert("usuario o contraseña incorrecta")
      }
    })
    response.catch((e) => alert(e))
  }

  function handleUsernameChange(e: any) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e: any) {
    setPassword(e.target.value);
  };

  return (
    <main className={styles.main}>
      <article className={styles.logincontainer}>
        <div>
          <Image src={'/logosena.png'} alt="sena icono" height={100} width={100} />
        </div>
        <form className={styles.containerform} onSubmit={validation}>
          <div>
            <div className={styles.form_group}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="off"
                placeholder="Enter your username"
                onChange={handleUsernameChange}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Enter your password"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className={styles.containerbutton}>
            <button aria-busy={sendstatus ? "true" : "false"} type="submit" >Login in</button>
          </div>
        </form>
      </article>
      <div className={styles.grid}></div>
    </main>
  );
}
