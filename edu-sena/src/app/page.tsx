import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <div className={styles.logincontainer}>
          <div>
            <h1>Login</h1>
          </div>
          <form className={styles.containerform}>
            <div className={styles.form_group}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className={styles.containerbutton}>
              <button type="submit" aria-busy="true">
                Please wait…
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.grid}></div>
    </main>
  );
}
