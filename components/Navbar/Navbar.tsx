import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-scroll";
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${styles.brand}`} href="/">Mohau Mukwevho</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ${styles.navbarNav}`}>
            <li className={`nav-item ${styles.navItem}`}>
              <a className={`nav-link active ${styles.navLink}`} aria-current="page" href="/">Home</a>
              </li>
              
              <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link active ${styles.navLink}`} to="about" smooth={true} duration={500}>About</Link>
                
              
          </li>
            <li className={`nav-item ${styles.navItem}`}>
              <a className={`nav-link ${styles.navLink}`} href="/contactPage">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;