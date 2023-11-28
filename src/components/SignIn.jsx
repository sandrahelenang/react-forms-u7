import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  let { setStep } = useContext(AuthContext);

  // Datos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Focus de los inputs del formulario
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handlerSubmit = (e) => {
    // Evita el envío de datos a un backend
    e.preventDefault();
    console.log("Sending data to backend...");
    console.log(`El usuario digitó: ${email} y ${password}`);
  };

  return (
    <main>
      <h3>¡Hola Amigo!</h3>
      <div className="card">
        <form onSubmit={handlerSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              autoFocus
              required
              onBlur={() => setEmailFocused(true)}
              data-focused={emailFocused}
            />
            <p className="error">Introduce una dirección de correo electrónico válida</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              pattern="(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
              onBlur={() => setPasswordFocused(true)}
              data-focused={passwordFocused}
            />
            <p className="error">Introduce una contraseña válida</p>
          </fieldset>
          <button type="submit">Entrar</button>
          <div className="forgot" onClick={() => setStep("forgot")}>
          ¿Has olvidado tu contraseña?
          </div>
        </form>
      </div>
      <p>
        ¿No tienes una cuenta?{" "}
        <span onClick={() => setStep("signup")}>Regístrate</span>
      </p>
    </main>
  );
};

export default SignIn;
