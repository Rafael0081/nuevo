import b1 from '../imagenes/Banner1.jpg'
import b2 from '../imagenes/Banner2.jpg'
import b3 from '../imagenes/Banner3.jpg'

function Banner() {
    return (
        <div className="container">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={b1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{fontSize:60, WebkitTextStroke:"2px red"}}>¡Feliz Navidad!</h5>
                            <p>Que esta temporada llene tu hogar de paz, alegría y esperanza.</p>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={b2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{fontSize:60, WebkitTextStroke:"2px red"}}>Celebrando la magia navideña</h5>
                            <p>Disfruta cada momento junto a quienes más quieres.</p>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={b3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{fontSize:60, WebkitTextStroke:"2px red"}}>Tiempo de unión</h5>
                            <p>Comparte amor, regala sonrisas y vive la Navidad con el corazón.</p>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Banner;