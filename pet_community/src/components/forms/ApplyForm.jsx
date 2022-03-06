import { useState } from 'react';
import Loader from 'react-spinners/ScaleLoader';

function ApplyForm() {
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formTipo, setFormTipo] = useState("");
    const [formTitle, setFormTitle] = useState("");
    const [formText, setFormText] = useState("");
    const [formMsg, setFormMsg] = useState("");
    const [formClassValidation, setFormClassValidation] = useState("");
    const [starLoading, setStarLoading] = useState(false);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    const handleSubmit = (e) => {
        e.preventDefault();
        let trimmedTitle = formTitle.trim();
        if(formName != '' && formEmail != '' && formTipo != '' && trimmedTitle != '' && formText != '') {
            setFormMsg("");
            setStarLoading(true);

            const putApply  = {
                name: formName,
                email: formEmail,
                tipo: formTipo,
            };

            const putData  = {
                title: trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1),
                text: formText.charAt(0).toUpperCase() + formText.slice(1),
                img: "assets/ejemplo.png",
                crown: "",
                crown_order: 4,
                rating: 0,
                people: 0,
                total: 0
            };

            fetch(`http://localhost:4000/apply`,
            {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(putApply)
            })
            .then(response => {
                if(response.ok) {
                    fetch(`http://localhost:4000/${formTipo}`,
                    {
                        method:'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(putData)
                    })
                    .then(response => {
                        if(response.ok) {
                            setFormMsg(`Gracias por postularse <b>${formName}</b>, su solicitud ya fue aprobada. Nos pondremos en contacto.`);
                            setFormClassValidation("msg__ok");
                            clearFormFields();
                        }
                    })
                    .catch(e => {
                        setFormMsg(`Ocurrio un error con su solicitud, vuelva a intentarlo.`);
                        setFormClassValidation("msg__error");
                    })
                    .finally(() => {
                        setStarLoading(false);
                    })
                }
            })
            .catch(e => {
                setFormMsg(`Ocurrio un error con su solicitud, vuelva a intentarlo.`);
                setFormClassValidation("msg__error");
                setStarLoading(false);
            })
        } else {
            setFormMsg(`Campos obligatorios sin completar, revise las pautas y vuelva a intentar.`);
            setFormClassValidation("msg__error");
        }

        const clearFormFields = () => {
            setFormName('');
            setFormEmail('');
            setFormTipo('');
            setFormTitle('');
            setFormText('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" className="form__input" placeholder="Nombre*" value={formName} onChange={(e) => setFormName(e.target.value)} />
                <input type="email" className="form__input" placeholder="Email*" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required />
                <select defaultValue="" value={formTipo} onChange={(e) => setFormTipo(e.target.value)}>
                    <option value="" disabled>Tipo de negocio...</option>
                    <option value="veterinary">Veterinaria</option>
                    <option value="stores">Tienda</option>
                    <option value="trainers">Entrenador</option>
                </select>
                <input type="text" className="form__input" placeholder="Titulo*" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} />
                <input type="text" className="form__input" placeholder="Texto*"  value={formText} onChange={(e) => setFormText(e.target.value)} />
                <button className={"btn__button"}>postularme &rarr;</button>
            </form>

            {
                formMsg != "" ? <p className={'form__msg '+formClassValidation} dangerouslySetInnerHTML={{__html: formMsg}} /> : '' 
            }

            <span className='loading'>
                <Loader color={color} loading={starLoading} />
            </span>
        </>
    );
}

export default ApplyForm;