import { Link } from 'react-router-dom';
import './../../assets/coming_soon.css';

function Community() {
    return (
        <div className="coming-soon">
            <Link to="/"><img src={require('./../../assets/img/comming-soon.png')} alt="Comming Soon" /></Link>
        </div>
    );
}

export default Community;