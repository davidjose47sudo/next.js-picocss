'use client'; // ahora hay que indicar si el componenete lo renderizara el usuario o el servidor
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "@/styles/page.module.css";
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

      if (response.message === "Credenciales inválidas") {
        setstatusSend(false)
        return alert(response.message)
      }
      if (typeof (response) === "object") {
        setTimeout(() => {
          if (response.rol != undefined) {
            setstatusSend(false)
            return route.push(`/${username}/${response.rol}/home`)
          }
          setstatusSend(false)
          return alert("Error De Rol")
        }, 1000);
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
              <label htmlFor="username_Email">Username o Email</label>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="off"
                placeholder="Enter your username"
                required
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
                required
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className={styles.containerbutton}>
            <button className={styles.botton} aria-busy={sendstatus ? "true" : "false"} type="submit" >Sign in</button>
          </div>
        </form>
      </article>
      <div className={styles.grid}></div>
    </main>
  );
}
