import { Link } from 'react-router-dom';

const Header = ({mainName,subName,btnName}) => {
    const scrollToDown = () => {
        window.scrollTo({
          top: 750,
          behavior: 'smooth'
        });
    };

    return (
        <header className="header">
            <div className="header__logo-box">
                <Link to="/"><img src={require('./../../assets/img/logo-white-pet.png')} alt="Logo del sitio" /></Link>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">{mainName}</span>
                    {
                        subName != "" ? <span className="heading-primary--sub">{subName}</span> : ""
                    }
                </h1>
                {
                    btnName != "" ? <button className="btn__button" onClick={scrollToDown}>{btnName}</button> : ""
                }                  
            </div>
            {
                subName != "" && btnName != "" ?
                <div className="header__animation">
                <i className="fas fa-paw"></i>
                <i className="fas fa-paw"></i>
                <i className="fas fa-paw"></i>
                <i className="fas fa-paw"></i>
                <i className="fas fa-paw"></i>
                </div> : ''
            }
        </header>
    );
}

export default Header;