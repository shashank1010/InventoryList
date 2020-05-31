import { nanoid } from 'nanoid'

export const generateID = () => nanoid();

export const FieldTypesEnum = {
    TEXT: 'TEXT',
    DESCRIPTION: 'DESCRIPTION',
    NUMBER: 'NUMBER',
    DATE: 'DATE',
    DELETE: 'DELETE'
}

export const fieldTypes = [
    { name: 'Text', id: FieldTypesEnum.TEXT },
    { name: 'Description', id: FieldTypesEnum.DESCRIPTION },
    { name: 'Number', id: FieldTypesEnum.NUMBER },
    { name: 'Date', id: FieldTypesEnum.DATE },
    { name: 'Delete', id: FieldTypesEnum.DELETE },
];
  