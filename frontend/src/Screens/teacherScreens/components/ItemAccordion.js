import React from 'react';
import { Accordion } from 'react-bootstrap';
import "../../css/Buttons.css"

export const ItemAccordion = (props) => {
    const { item, deletePublication, editPublication } = props;

    return (
        <Accordion.Item eventKey={item.key}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>
                <p>Descripcion: {item.description}</p>
                <p>Fecha: {item.date}</p>
                <button 
                    type="button" 
                    className="btn btn-primary buttonBlue"
                    onClick={()=>editPublication(item.key)}>
                        Editar publicacion
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={()=>deletePublication(item.key)}>
                        Eliminar publicacion
                </button>
            </Accordion.Body>
        </Accordion.Item>
    )
}
