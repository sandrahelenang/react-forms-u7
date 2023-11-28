import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";

import { signUpSchema } from "../schemas/signUpSchema";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirm: "",
  framework: "",
  terms: false,
};

const SignUp = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <main>
      <h3>¡Bienvenidos!</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signUpSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="fullName">Nombre completo</label>
              <Field name="fullName" id="fullName" type="text" autoFocus />
              <ErrorMessage
                name="fullName"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">correo electrónico</label>
              <Field name="email" id="email" type="email" />
              <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="password">contraseña</label>
              <Field name="password" id="password" type="password" />
              <ErrorMessage
                name="password"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="confirm">Confirmar contraseña</label>
              <Field name="confirm" id="confirm" type="password" />
              <ErrorMessage
                name="confirm"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="framework">País de orígen</label>
              <Field name="framework" id="framework" as="select">
                <option value="">Selecciona tu país de origen</option>
                <option value="react">Colombia</option>
                <option value="vue">Perú</option>
                <option value="angular">Otro</option>
              </Field>
              <ErrorMessage
                name="framework"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="terms">
                <Field name="terms" id="terms" type="checkbox" /> Aceptar términos y condiciones
              </label>
              <ErrorMessage
                name="terms"
                component="p"
                className="error-message error-message-terms"
              />
            </fieldset>
            <button type="submit">Entrar</button>
          </Form>
        </Formik>
      </div>
      <p>
        ¿No tienes una cuenta?{" "}
        <span onClick={() => setStep("signin")}>Regístrate</span>
      </p>
    </main>
  );
};

export default SignUp;
