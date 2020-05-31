import { useRef, useEffect } from "react";
import { nanoid } from 'nanoid'

export const generateID = () => nanoid();

export const FieldTypesEnum = {
    TEXT: 'text',
    TEXTAREA: 'textarea',
    NUMBER: 'number',
    DATE: 'date',
    DELETE: 'delete'
}

export const fieldTypes = [
    { name: 'Text', id: FieldTypesEnum.TEXT },
    { name: 'Description', id: FieldTypesEnum.TEXTAREA },
    { name: 'Number', id: FieldTypesEnum.NUMBER },
    { name: 'Date', id: FieldTypesEnum.DATE },
    { name: 'Delete', id: FieldTypesEnum.DELETE },
];

export const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}