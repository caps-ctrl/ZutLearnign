import Link from "next/link";
import styles from "./AuthPage.module.css";

type AuthPageProps = {
  mode: "login" | "register";
};

export default function AuthPage({ mode }: AuthPageProps) {
  const isLogin = mode === "login";

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.formSide}>
          <Link href="/" className={styles.brand} aria-label="uniCheat — strona główna">
            <span className={styles.brandMark}>uC</span>
            <span>uniCheat</span>
          </Link>

          <div className={styles.formWrap}>
            <p className={styles.eyebrow}>{isLogin ? "Witaj ponownie" : "Dołącz do nas"}</p>
            <h1 className={styles.title}>
              {isLogin ? "Zaloguj się do konta" : "Załóż konto studenta"}
            </h1>
            <p className={styles.subtitle}>
              {isLogin
                ? "Twoje materiały, zapisane przedmioty i społeczność czekają w jednym miejscu."
                : "Zyskaj dostęp do materiałów, opinii i wiedzy tworzonej przez studentów ZUT."}
            </p>

            <form className={styles.form}>
              {!isLogin && (
                <div className={styles.fieldRow}>
                  <label className={styles.field}>
                    <span className={styles.label}>Imię</span>
                    <input
                      className={styles.input}
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Jan"
                      required
                    />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.label}>Nazwisko</span>
                    <input
                      className={styles.input}
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Kowalski"
                      required
                    />
                  </label>
                </div>
              )}

              <label className={styles.field}>
                <span className={styles.label}>Adres e-mail</span>
                <input
                  className={styles.input}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="student@zut.edu.pl"
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Hasło</span>
                <input
                  className={styles.input}
                  name="password"
                  type="password"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  placeholder={isLogin ? "Wpisz swoje hasło" : "Minimum 8 znaków"}
                  minLength={isLogin ? undefined : 8}
                  required
                />
              </label>

              {!isLogin && (
                <label className={styles.field}>
                  <span className={styles.label}>Powtórz hasło</span>
                  <input
                    className={styles.input}
                    name="passwordConfirmation"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Wpisz hasło ponownie"
                    minLength={8}
                    required
                  />
                </label>
              )}

              <div className={styles.options}>
                <label className={styles.checkboxLabel}>
                  <input className={styles.checkbox} type="checkbox" required={!isLogin} />
                  <span>
                    {isLogin ? (
                      "Zapamiętaj mnie"
                    ) : (
                      <>
                        Akceptuję <Link className={styles.textLink} href="#">regulamin</Link> i politykę prywatności
                      </>
                    )}
                  </span>
                </label>
                {isLogin && (
                  <Link className={styles.textLink} href="#">
                    Nie pamiętasz hasła?
                  </Link>
                )}
              </div>

              <button className={styles.submit} type="submit">
                {isLogin ? "Zaloguj się" : "Utwórz konto"}
              </button>
            </form>

            <p className={styles.switchText}>
              {isLogin ? "Nie masz jeszcze konta? " : "Masz już konto? "}
              <Link className={styles.textLink} href={isLogin ? "/register" : "/login"}>
                {isLogin ? "Zarejestruj się" : "Zaloguj się"}
              </Link>
            </p>
          </div>
        </section>

        <aside className={styles.visualSide} aria-label="O uniCheat">
          <span className={styles.decorDot} aria-hidden="true" />
          <div className={styles.visualContent}>
            <span className={styles.visualBadge}>Społeczność studentów ZUT</span>
            <h2 className={styles.visualTitle}>Ucz się sprytniej. Razem.</h2>
            <p className={styles.visualText}>
              Notatki, materiały i praktyczne wskazówki od osób, które zaliczały te same przedmioty co Ty.
            </p>
            <div className={styles.stats} aria-label="Najważniejsze korzyści">
              <div className={styles.stat}>
                <strong>24/7</strong>
                <span>Dostęp do wiedzy</span>
              </div>
              <div className={styles.stat}>
                <strong>ZUT</strong>
                <span>Jedna społeczność</span>
              </div>
              <div className={styles.stat}>
                <strong>100%</strong>
                <span>Studencki klimat</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
