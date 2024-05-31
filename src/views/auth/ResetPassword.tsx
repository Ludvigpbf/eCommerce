
const ResetPass: React.FC = () => {
  return (
    <section className="section reset-pass">
      <div className="content">
        <h1>Välj ett nytt lösenord</h1>
        <form className="auth-form">
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
          <button type="submit" className="login-btn">
            Återställ lösenord
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPass;
