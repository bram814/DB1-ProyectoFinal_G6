import React from 'react';
import { ItemAccordion } from './ItemAccordion';
import { Accordion } from 'react-bootstrap';

export const AccordionPublications = (props) => {
    const { data, deletePublication, editPublication } = props;
    return (
        <Accordion defaultActiveKey="0">
            {
                data.map(item => {
                    return(
                        <ItemAccordion item={item} key={item.key} deletePublication={deletePublication} editPublication={editPublication} />
                    )
                })
            }
        </Accordion>
    )
}