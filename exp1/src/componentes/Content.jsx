import c1 from '../imagenes/Card1.jpg';
import c2 from '../imagenes/Card2.jpg';
import c3 from '../imagenes/Card3.jpg';

function Content() {
    return (
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card">
                        <img src={c1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title  text-center" style={{fontSize:24}}>¡Felices Fiestas!</h5>
                            <p className="card-text" style={{fontSize:18, textAlign:"justify"}}>Que la magia de la Navidad ilumine tu vida con alegría, paz y esperanza.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={c2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title  text-center" style={{fontSize:24}}>Unidos por la Navidad</h5>
                            <p className="card-text" style={{fontSize:18, textAlign:"justify"}}>Que cada día de estas fiestas esté lleno de abrazos sinceros y recuerdos inolvidables.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={c3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title  text-center" style={{fontSize:24}}>La magia está en el aire</h5>
                            <p className="card-text" style={{fontSize:18, textAlign:"justify"}}>Que esta Navidad te regale momentos de amor, paz y alegría junto a quienes más aprecias.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
