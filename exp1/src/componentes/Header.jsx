import Logo from '../imagenes/Logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-danger">
          <div className="container-fluid">
            <img src={ Logo } width={ 50 } alt="" />

            <a className="navbar-brand text-white" href="#">
              <h1 className="text-white">Sitio Navideño</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <h4><NavLink to="/" className="nav-link active text-white text-center" aria-current="page" href="#">Inicio</NavLink></h4>
                </li>
                <li className="nav-item">
                  <h4><NavLink to="productos" className="nav-link text-white text-center" href="#">Productos</NavLink></h4>
                </li>
                <li className="nav-item">
                  <h4><NavLink to="contactenos" className="nav-link text-white text-center" href="#">Contactos</NavLink></h4>
                </li>
                <li className="nav-item">
                  <h4><NavLink to="acercade" className="nav-link text-white text-center" href="#">Acerca de..</NavLink></h4>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Header;