import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Layout() {
  const {kijelentkezes_fv}=useContext(AuthContext);
    return (
        <div className="container">
          <header className="App-header">
            <h1>React login és regisztráció</h1>
          </header>
          <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Kezdőlap</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/bejelentkezes">Bejelentkezés</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/regisztracio">Regisztráció</Link>
            </li>
          </ul>
          <button onClick={kijelentkezes_fv} className="btn btn-dark">Kijelentkezés</button>
          </nav>
          <article>
            <Outlet/>
          </article>
          <footer></footer>
        </div>
      );
}

export default Layout