import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Register: React.FC = () => {
  return (
    <section className="register">
      <div className="content">
        <h1>Skapa konto</h1>
        <div className="organization">
          <Link to="/registrera/foretag">Företag?</Link>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">E-post</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Lösenord</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Bekräfta lösenord</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>
          <button type="submit" className="login-btn">
            Fortsätt
          </button>
          <div className="no-account">
            <p>Har du redan ett konto?</p>
            <Link to="/logga-in">Logga in</Link>
          </div>
        </form>
        <div className="separator">
          <hr /> eller <hr />
        </div>
        <div className="google-login">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            size="medium"
            width={440}
            theme="filled_blue"
            logo_alignment="left"
            shape="square"
            text="signup_with"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
