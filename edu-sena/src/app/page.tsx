'use client';
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import handlelogin from "@/helpers/login";


export default function Home() {
  const route = useRouter();
  const [username, setUsername]: any = useState("username");
  const [password, setPassword]: any = useState("password");
  const [sendstatus, setstatusSend]: any = useState(false);

  function validation(e: FormEvent<HTMLFormElement>) {
    setstatusSend(true)
    e.preventDefault()
    const response = handlelogin({ credencial: username, password: password })
    response.then((response) => {
      console.log(response)
      if (!response) {
        setstatusSend(false)
        return alert("usuario o contraseña incorrecta")
      }
      if (typeof (response) === "object") {
        setTimeout(() => {
          console.log(response)
          if (response.message.rol) {
            setstatusSend(false)
            return route.push(`/${username}/${response.message.rol}/home`)
          }
          return alert("Error De Rol")
        }, 1000);
      }
      setstatusSend(false)
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
