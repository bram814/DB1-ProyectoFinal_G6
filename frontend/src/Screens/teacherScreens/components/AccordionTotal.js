import React from 'react';
import { ItemAccordion } from './ItemAccordion';
import { Accordion } from 'react-bootstrap';

export const AccordionTotal = (props) => {
    const { data, deleteItem, editItem, nameItem} = props;
    return (
        <Accordion defaultActiveKey="0">
            {
                data.map(item => {
                    return(
                        <ItemAccordion item={item} key={item.key} deleteItem={deleteItem} editItem={editItem} nameItem={nameItem}/>
                    )
                })
            }
        </Accordion>
    )
}