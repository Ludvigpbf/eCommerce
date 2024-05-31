import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login: React.FC = () => {
  return (
    <section className="login">
      <div className="content">
        <h1>Logga in</h1>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">E-post</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Lösenord</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="forgot-password">
            <Link to="/losenord">Glömt lösenord?</Link>
          </div>
          <button type="submit" className="login-btn">
            Logga in
          </button>
          <div className="no-account">
            <p>Har du inget konto?</p>
            <Link to="/registrera">Registrera dig</Link>
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
            size="large"
            width={440}
            theme="filled_blue"
            logo_alignment="left"
            shape="square"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
