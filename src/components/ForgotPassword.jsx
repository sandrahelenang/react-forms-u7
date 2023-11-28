import { useFormik } from "formik";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema";

const ForgotPassword = () => {
  let { setStep } = useContext(AuthContext);
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit,
  });

  function onSubmit() {
    console.log(values);
  }

  return (
    <main>
      <h3>¿Olvidaste tu contraseña?</h3>
      <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              autoFocus
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </fieldset>
          <button type="submit">Recuérdame</button>
        </form>
      </div>
      <p>
        ¿Ya tienes una cuenta?{" "}
        <span onClick={() => setStep("signin")}>Inicia sesión</span>
      </p>
    </main>
  );
};

export default ForgotPassword;
