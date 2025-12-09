import a1 from '../imagenes/Arbol.jpg';
import b1 from '../imagenes/Luces.png';
import c1 from '../imagenes/Esferas.jpg';
import d1 from '../imagenes/Estrella.jpg';

function Productos() {
  return (
    <div className="container py-4">
      <div className="row g-4">

        {/* Producto 1 */}
        <div className="col-md-3 animate__animated animate__fadeInUp">
          <div className="card shadow-lg" style={{ borderRadius: "15px", background: "#f9f1ff" }}>
            <img
              src={a1}
              className="card-img-top"
              style={{ borderRadius: "15px 15px 0 0" }}
              alt="Producto 1"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-primary">Árbol de Navidad</h5>
              <p className="card-text">Decora tu hogar con este hermoso árbol de Navidad de tamaño ideal. Fácil de armar y resistente, perfecto para crear un ambiente festivo y acogedor.</p>
              <h4 className="text-success fw-bold">$40.00</h4>
              <button className="btn btn-primary mt-2 px-4">Comprar</button>
            </div>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="col-md-3 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="card shadow-lg" style={{ borderRadius: "15px", background: "#e5f7ff" }}>
            <img
              src={b1}
              className="card-img-top"
              style={{ borderRadius: "15px 15px 0 0" }}
              alt="Producto 2"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-primary">Luces LED</h5>
              <p className="card-text">Ilumina tus espacios con estas luces LED de bajo consumo. Flexibles y duraderas, perfectas para árboles, interiores o exteriores.</p>
              <h4 className="text-success fw-bold">$20.00</h4>
              <button className="btn btn-primary mt-2 px-4">Comprar</button>
            </div>
          </div>
        </div>

        {/* Producto 3 */}
        <div className="col-md-3 animate__animated animate__fadeInUp animate__delay-2s">
          <div className="card shadow-lg" style={{ borderRadius: "15px", background: "#fff8e1" }}>
            <img
              src={c1}
              className="card-img-top"
              style={{ borderRadius: "15px 15px 0 0" }}
              alt="Producto 3"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-primary">Azalón de Esferas</h5>
              <p className="card-text">Juego de esferas navideñas en colores clásicos y brillantes. Ligero y resistente, ideal para decorar el árbol o complementar tu decoración festiva.</p>
              <h4 className="text-success fw-bold">$18.00</h4>
              <button className="btn btn-primary mt-2 px-4">Comprar</button>
            </div>
          </div>
        </div>

        {/* Producto 4 */}
        <div className="col-md-3 animate__animated animate__fadeInUp animate__delay-3s">
          <div className="card shadow-lg" style={{ borderRadius: "15px", background: "#e9ffe9" }}>
            <img
              src={d1}
              className="card-img-top"
              style={{ borderRadius: "15px 15px 0 0" }}
              alt="Producto 4"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-primary">Estrella LED</h5>
              <p className="card-text">Agrega un toque brillante a tu Navidad con esta estrella LED. Ideal para la punta del árbol o decoración en ventanas, crea un efecto luminoso mágico.</p>
              <h4 className="text-success fw-bold">$30.00</h4>
              <button className="btn btn-primary mt-2 px-4">Comprar</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Productos;
