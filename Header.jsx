function Header({ autoFill, name }) {
    return (
      <div className="header-container">
        <div className="header-top-half">
          <h1>CV Maker</h1>
          <div className="header-top-buttons">
            <button onClick={autoFill} className="autofill">Autofill</button>
          </div>
        </div>
        <div className="header-bottom-half">
          <h3>Created by {name}</h3>
        </div>
      </div>
    );
  }

export default Header;