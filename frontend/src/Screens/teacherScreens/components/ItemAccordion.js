import React from 'react';
import { Accordion } from 'react-bootstrap';
import "../../css/Buttons.css"

export const ItemAccordion = (props) => {
    const { item, deleteItem, editItem, nameItem } = props;
    return (
        <Accordion.Item eventKey={item.key}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>
                {
                    nameItem === "publicacion" ?
                    <div>
                        <p>Descripcion: {item.description}</p>
                        <p>Materia: {item.course}</p>
                        <p>Fecha: {item.date}</p>
                    </div>
                    :
                    <div>
                        <p>Descripcion: {item.description}</p>
                        <p>Materia: {item.course}</p>
                        <p>Fecha: {item.date}</p>
                        <p>Fecha de publicacion: {item.publish_date}</p>
                        <p>Alumnos asignados: {item.students}</p>
                        <p>Valor: {item.value}</p>
                        <p>Fecha de entrega: {item.delivery_date}</p>
                    </div>
                }
                <button 
                    type="button" 
                    className="btn btn-primary buttonBlue"
                    onClick={()=>editItem(item.key)}>
                        Editar {nameItem}
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={()=>deleteItem(item.key)}>
                        Eliminar {nameItem}
                </button>
            </Accordion.Body>
        </Accordion.Item>
    )
}
