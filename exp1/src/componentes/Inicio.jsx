import Mision from './Mision';
import Banner from './Banner';
import Content from './Content';
import Footer from './Footer';


function Inicio() {
    return (
        <div className="container mt-3">
            <Mision />
            <Banner />
            <Content />
            <Footer />
        </div>
    )
}

export default Inicio;