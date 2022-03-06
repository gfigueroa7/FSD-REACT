import { Link } from "react-router-dom";

const WholeDetail = ({object, pathname}) => {
    const father = pathname.split("/")[1];

    return (
        <div className="content__detail">
            <h2 className="h2__heading">{object.title}</h2>
            <Link to={`/${father}`}><button className="btn__button">← Volver</button></Link>
            <div className="detail__img"><img src={object.img} /></div>
            <div className="detail__info">
                <div className="info__A">
                    <p className="info__title"><b>LOCALIDAD</b></p><p>{object.location}</p><br/>
                    <p className="info__title"><b>DIRECCIÓN</b></p><p>{object.address}</p><br/>
                    <p className="info__title"><b>E-MAIL</b></p><p><a href={`mailto:${object.email}`}>{object.email}</a></p><br/>
                    <p className="info__title"><b>TELÉFONO</b></p><p><a href={`tel:${object.phone}`}>{object.phone}</a></p>
                </div>
                <div className="info__B">

                    {
                        object.schedule.week !== '' && object.schedule.saturday !== '' && object.schedule.sunday !== '' ?
                        <><p><b>HORARIOS</b></p>
                        <p>{object.schedule.week}</p>
                        <p>{object.schedule.saturday}</p>
                        <p>Domingos {object.schedule.sunday}</p></> : ''
                    }
                
                </div>
            </div>
            <div className="detail__map">

                {
                    object.map_img !== '' ?
                    <><img src={object.map_img} />
                    <a href={`${object.map_url}`} target="_blank" >VER</a></>
                    : ''
                }

            </div>
            <p dangerouslySetInnerHTML={{__html: '<b>DESCRIPCION</b><br>'+object.text}} />
        </div>
    );
}

export default WholeDetail;