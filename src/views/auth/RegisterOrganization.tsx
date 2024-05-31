import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <section className="section register reg-org">
      <div className="content org">
        <h1>Skapa företagskonto</h1>
        <div className="organization">
          <Link to="/registrera">Privatperson?</Link>
        </div>
        <form className="auth-form org-form">
          <div className="col-container">
            <div className="left-col">
              <div className="form-group">
                <label htmlFor="orgName">Företagsnamn *</label>
                <input type="text" id="orgName" name="orgName" />
              </div>
              <div className="form-group">
                <label htmlFor="orgAddress">Adress *</label>
                <input type="text" id="orgAddress" name="orgAddress" />
              </div>
              <div className="form-group">
                <label htmlFor="orgZip">Postnummer *</label>
                <input type="text" id="orgZip" name="orgZip" />
              </div>
              <div className="form-group">
                <label htmlFor="orgCity">Postort *</label>
                <input type="text" id="orgCity" name="orgCity" />
              </div>
              <div className="form-group">
                <label htmlFor="orgNumber">Organisationsnummer *</label>
                <input type="text" id="orgNumber" name="orgNumber" />
              </div>
            </div>
            <div className="right-col">
              <div className="form-group">
                <label htmlFor="orgVat">
                  Momsreg.nummer <span className="info">i</span>
                </label>
                <input type="text" id="orgVat" name="orgVat" />
              </div>
              <div className="form-group">
                <label htmlFor="orgPhone">Telefon *</label>
                <input type="text" id="orgPhone" name="orgPhone" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-post *</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Lösenord *</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Bekräfta lösenord *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="login-btn">
            Fortsätt
          </button>
          <div className="no-account">
            <p>Har du redan ett konto?</p>
            <Link to="/logga-in">Logga in</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
