import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <header className="jumbotron" style={{ backgroundColor: "#BCA1D4"}}>
      <div className="container text-white">
        <h1 className="display-4" style={{ textAlign: "center" }}>Flashcard-o-matic</h1>
        <p className="lead" style={{ textAlign: "center" }}>Discover The Flashcard Difference.</p>
        <div className="d-flex justify-content-around row">
          <button className="btn btn-dark" onClick={() => history.goBack(1)}>« Back</button>
          <button className="btn btn-dark" onClick={() => history.goForward(1)}>Forward »</button>
        </div>
      </div>

    </header>
  );
}

export default Header;
