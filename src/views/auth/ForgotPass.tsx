import { Link } from "react-router-dom";

const ForgotPass: React.FC = () => {
  return (
    <section className="section forgot-pass">
      <div className="content">
        <h1>Återställ lösenord</h1>
        <p>Skriv in den mailadress du registrerade dig med.</p>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">E-post</label>
            <input type="email" id="email" name="email" />
          </div>
          <button type="submit" className="login-btn">
            Skicka återställningslänk
          </button>
          <div className="no-account">
            <Link to="/logga-in">Tillbaka till inloggningen</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPass;
