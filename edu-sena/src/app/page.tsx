'use client'; // ahora hay que indicar si el componenete lo renderizara el usuario o el servidor
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, use, useState } from "react";
import styles from "../styles/page.module.css";
import { encode } from "code-module64";
import Image from "next/image";
import { login } from "@/libs/auth/userauth";


export default function Home() {
  const route = useRouter();
  const [username, setUsername]: any = useState("username");
  const [password, setPassword]: any = useState("password");
  const [sendstatus, setstatusSend]: any = useState(false);

  function validation(e: FormEvent<HTMLFormElement>) {
    setstatusSend(true)
    e.preventDefault()
    const user = encode(
      {
        secret: 'env.aquiva',
        data: {
          information: JSON.stringify({username:username,rol:"estudent"}) 
        }
      }
    )
    user.then(encript => {
      login(encript.message);
      localStorage.setItem('datauser', encript.message);
      setTimeout(() => {
        if (true) {
          route.push(`/${username}/estudent/home`)
        } else {
          route.push(`/${username}/teacher/home`)
        }
      }, 1000);
    })
    user.catch((error) => {
      setstatusSend(false)
      alert("intente de nuevo")
      console.log(error)
    })
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
