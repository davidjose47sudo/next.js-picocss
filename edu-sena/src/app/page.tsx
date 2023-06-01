'use client'; // ahora hay que indicar si el componenete lo renderizara el usuario o el servidor
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useState } from "react";
import styles from "../styles/page.module.css";


export default function Home() {
  const route = useRouter();
  const [username, setUsername]: any = useState("username");
  const [password, setPassword]: any = useState("password");

  function validation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (true) {
      route.push(`/${username}/estudent/home`)
    } else {
      route.push("/[ID]/teacher")
    }
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
          <h1>SENA LOGIN</h1>
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
            <input value={"login in"} type="submit" />
          </div>
        </form>
      </article>
      <div className={styles.grid}></div>
    </main>
  );
}
